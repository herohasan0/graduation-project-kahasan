export default function ConvertDate(unixTimestamp) {
  const milliseconds = unixTimestamp * 1000;
  const dataObject = new Date(milliseconds);
  const humanDateFormat = dataObject.toLocaleDateString('tr-TR');
  return humanDateFormat;
}
