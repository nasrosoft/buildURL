const buildUrl = ({ name, timestamps }) => {
  let sorting = timestamps.sort();
  let median = sorting[Math.floor(sorting.length / 2)];
  let validTimestamps = sorting[sorting.length - 1] - sorting[0];
  let validMeduanTime = median - sorting[0];
  let durationHours = new Date(validTimestamps * 1000).getHours();
  let durationMinutes = new Date(validTimestamps * 1000).getMinutes();
  let durationSeconds = new Date(validTimestamps * 1000).getSeconds();

  let medianHours = new Date(validMeduanTime * 1000).getHours();
  let medianMinutes = new Date(validMeduanTime * 1000).getMinutes();
  let medianSeconds = new Date(validMeduanTime * 1000).getSeconds();
  let generate = `https://server/record?name=${name}&duration=${durationHours}h${durationMinutes}min${durationSeconds}s&median=${medianHours}h${medianMinutes}min${medianSeconds}s;`;
  return console.log(generate);
};
buildUrl({
  name: "toto",
  timestamps: [1508349990, 1508350000, 1508357300],
});
//
