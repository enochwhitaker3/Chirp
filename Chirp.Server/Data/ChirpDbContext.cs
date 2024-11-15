using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Chirp.Server.Data;

public partial class ChirpDbContext : DbContext
{
    public ChirpDbContext()
    {
    }

    public ChirpDbContext(DbContextOptions<ChirpDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<FollowedUser> FollowedUsers { get; set; }

    public virtual DbSet<Like> Likes { get; set; }

    public virtual DbSet<Post> Posts { get; set; }

    public virtual DbSet<UserAccount> UserAccounts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<FollowedUser>(entity =>
        {
            entity.HasKey(e => new { e.FollowingUserId, e.FollowedUserId }).HasName("followed_user_pkey");

            entity.ToTable("followed_user", "chirp");

            entity.Property(e => e.FollowingUserId).HasColumnName("following_user_id");
            entity.Property(e => e.FollowedUserId).HasColumnName("followed_user_id");
            entity.Property(e => e.FollowedAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("followed_at");

            entity.HasOne(d => d.FollowedUserNavigation).WithMany(p => p.FollowedUserFollowedUserNavigations)
                .HasForeignKey(d => d.FollowedUserId)
                .HasConstraintName("followed_user_followed_user_id_fkey");

            entity.HasOne(d => d.FollowingUser).WithMany(p => p.FollowedUserFollowingUsers)
                .HasForeignKey(d => d.FollowingUserId)
                .HasConstraintName("followed_user_following_user_id_fkey");
        });

        modelBuilder.Entity<Like>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("likes_pkey");

            entity.ToTable("likes", "chirp");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.PostId).HasColumnName("post_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.Post).WithMany(p => p.Likes)
                .HasForeignKey(d => d.PostId)
                .HasConstraintName("likes_post_id_fkey");

            entity.HasOne(d => d.User).WithMany(p => p.Likes)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("likes_user_id_fkey");
        });

        modelBuilder.Entity<Post>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("posts_pkey");

            entity.ToTable("posts", "chirp");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Body)
                .HasMaxLength(250)
                .HasColumnName("body");
            entity.Property(e => e.IsReply)
                .HasDefaultValue(false)
                .HasColumnName("is_reply");
            entity.Property(e => e.ParentPostId).HasColumnName("parent_post_id");
            entity.Property(e => e.TimePosted)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("time_posted");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.ParentPost).WithMany(p => p.InverseParentPost)
                .HasForeignKey(d => d.ParentPostId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("posts_parent_post_id_fkey");

            entity.HasOne(d => d.User).WithMany(p => p.Posts)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("posts_user_id_fkey");
        });

        modelBuilder.Entity<UserAccount>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("user_account_pkey");

            entity.ToTable("user_account", "chirp");

            entity.HasIndex(e => e.Email, "user_account_email_key").IsUnique();

            entity.HasIndex(e => e.Guid, "user_account_guid_key").IsUnique();

            entity.HasIndex(e => e.Username, "user_account_username_key").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AuthId).HasColumnName("auth_id");
            entity.Property(e => e.Bio).HasColumnName("bio");
            entity.Property(e => e.DateJoined)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("date_joined");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .HasColumnName("email");
            entity.Property(e => e.Guid).HasColumnName("guid");
            entity.Property(e => e.UserPFP).HasColumnName("user_pfp");
            entity.Property(e => e.Username)
                .HasMaxLength(15)
                .HasColumnName("username");

            entity.HasMany(d => d.BlockedUsers).WithMany(p => p.BlockerUsers)
                .UsingEntity<Dictionary<string, object>>(
                    "BlockedUser",
                    r => r.HasOne<UserAccount>().WithMany()
                        .HasForeignKey("BlockedUserId")
                        .HasConstraintName("blocked_user_blocked_user_id_fkey"),
                    l => l.HasOne<UserAccount>().WithMany()
                        .HasForeignKey("BlockerUserId")
                        .HasConstraintName("blocked_user_blocker_user_id_fkey"),
                    j =>
                    {
                        j.HasKey("BlockerUserId", "BlockedUserId").HasName("blocked_user_pkey");
                        j.ToTable("blocked_user", "chirp");
                        j.IndexerProperty<int>("BlockerUserId").HasColumnName("blocker_user_id");
                        j.IndexerProperty<int>("BlockedUserId").HasColumnName("blocked_user_id");
                    });

            entity.HasMany(d => d.BlockerUsers).WithMany(p => p.BlockedUsers)
                .UsingEntity<Dictionary<string, object>>(
                    "BlockedUser",
                    r => r.HasOne<UserAccount>().WithMany()
                        .HasForeignKey("BlockerUserId")
                        .HasConstraintName("blocked_user_blocker_user_id_fkey"),
                    l => l.HasOne<UserAccount>().WithMany()
                        .HasForeignKey("BlockedUserId")
                        .HasConstraintName("blocked_user_blocked_user_id_fkey"),
                    j =>
                    {
                        j.HasKey("BlockerUserId", "BlockedUserId").HasName("blocked_user_pkey");
                        j.ToTable("blocked_user", "chirp");
                        j.IndexerProperty<int>("BlockerUserId").HasColumnName("blocker_user_id");
                        j.IndexerProperty<int>("BlockedUserId").HasColumnName("blocked_user_id");
                    });
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
