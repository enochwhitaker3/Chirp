using Chirp.Server.Data;
using Chirp.Server.Services.FollowServices;
using Chirp.Server.Services.LikeServices;
using Chirp.Server.Services.PostServices;
using Chirp.Server.Services.UserServices;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContextFactory<ChirpDbContext>(config => config.UseNpgsql(builder.Configuration.GetConnectionString("chirpdb"), builder =>
{
    builder.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null);
}));

builder.Services.AddSingleton<IUserService, UserService>();
builder.Services.AddSingleton<IPostService, PostService>();
builder.Services.AddSingleton<ILikeService, LikeService>();
builder.Services.AddSingleton<IFollowUserService, FollowUserService>();

bool allowAll = builder.Configuration["allowAll"] == "true";

builder.Services.AddCors(options =>
{
	options.AddPolicy("AllowSpecificOrigin",
		policy =>
		{
			if (allowAll)
			{
				policy.AllowAnyOrigin()
						.AllowAnyHeader()
						.AllowAnyMethod();
			}
			else
			{
				policy.WithOrigins("http://localhost:5173")
						.AllowAnyHeader()
						.AllowAnyMethod();
			}
		});
});

builder.Services.AddHttpContextAccessor();


builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidIssuer = "https://auth.snowse.duckdns.org/realms/advanced-frontend",
            ValidAudience = "enoch-client",
        };
		options.Authority = "https://auth.snowse.duckdns.org/realms/advanced-frontend";
    });

builder.Services.AddControllers().AddJsonOptions(x => { x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles; });


var app = builder.Build();

app.UseCors("AllowSpecificOrigin");

app.UseDefaultFiles();
app.UseStaticFiles();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
