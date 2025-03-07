const formatDateTime = (data: string): string => {
  const date = new Date(data);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleString("ar-EG", options);
};

export default formatDateTime;
