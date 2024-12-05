export const preprocessText = (text: string, maxLength: number): string => {
  return text.replace(
    new RegExp(`(\\S{${maxLength},})`, "g"),
    (match) =>
      match.length > maxLength
        ? match.replace(new RegExp(`(.{${maxLength}})`, "g"), "$1\u200B")
        : match
  );
};
