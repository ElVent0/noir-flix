export const getDate = (created_at) => {
  const date = new Date(created_at);

  const options = {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  const formattedDate = date
    .toLocaleDateString("en-US", options)
    .split("/")
    .join(".")
    .split(",")[0]
    .split(".")
    .map((item) => (item.length === 1 ? `0${item}` : item))
    .join(".");
  const time = date.toLocaleTimeString("en-US", options);

  const formattedDateTime = `${formattedDate} ${time}`;

  return formattedDateTime;
};
