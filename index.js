const generateValidTime = (validTime) => {
  let hours = new Date(validTime * 1000).getHours();
  let minutes = new Date(validTime * 1000).getMinutes();
  let seconds = new Date(validTime * 1000).getSeconds();
  return [hours, minutes, seconds];
};
const buildUrl = ({ name, timestamps }) => {
  let validTimestamps =
    timestamps.sort()[timestamps.length - 1] - timestamps[0];
  let validMedianTime =
    timestamps.sort() % 2 == 0
      ? timestamps.sort()[Math.floor(timestamps.length / 2)] - timestamps[0]
      : Math.floor(
          (timestamps.sort()[Math.floor(timestamps.length / 2)] +
            timestamps.sort()[Math.floor(timestamps.length / 2)]) /
            2
        ) - timestamps[0];
  let [hours, minutes, seconds] = generateValidTime(validTimestamps);
  let [medianHours, medianMinutes, medianSeconds] =
    generateValidTime(validMedianTime);
  let generate = `https://server/record?name=${name}&duration=${hours}h${minutes}min${seconds}s&median=${medianHours}h${medianMinutes}min${medianSeconds}s;`;
  console.log(generate);
};
buildUrl({
  name: "toto",
  timestamps: [1508349990, 1508350000, 1508357300, 1508357300],
});
