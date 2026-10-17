const Prices = [20, 100, 2, 500, 132, 315, 15];
const Items = ["phone", "book", "mask", "glasses", "sticker", "bottle", "coke"];

Items.forEach((item, index) => {
  console.log("ნივთი: " + item);
  console.log("ფასი: " + Prices[index]);
});
//////////////////////

// 2)
const packets = [120, 505, -45, 999, 14, 700, 33, 842];

const hasDangerousPacket = packets.some(
  (packet) => packet > 500 && packet % 7 === 0,
);

if (hasDangerousPacket) {
  const legitimatePackets = packets.filter(
    (packet) => packet > 0 && packet % 3 !== 0 && packet < 1000,
  );

  console.log(legitimatePackets);
} else {
  console.log("საშიში პაკეტი არ მოიძებნა");
}

// 3)
const rawEnergies = [5, 45, 120, 200, 12, 88, -10, 150];

const quantumCoefficients = rawEnergies
  .filter((energy) => energy > 10 && energy < 150)
  .map((energy) => "Q-" + (energy * 3 - 5));

console.log(quantumCoefficients);

// 4)
const tokens_serv1 = ["SEC-0091", "SEC-7821", "SEC-1111", "SEC-999"];
const tokens_serv2 = ["SEC-0091", "SEc-1111", "SEC-1111", "SEC-9999"];
const tokens_serv3 = ["SEC-0000091", "SEC-7821", "SEC-1111"];

const server1 = tokens_serv1.every(
  (token) => token.startsWith("SEC-") && token.length >= 8,
);

const server2 = tokens_serv2.every(
  (token) => token.startsWith("SEC-") && token.length >= 8,
);

const server3 = tokens_serv3.every(
  (token) => token.startsWith("SEC-") && token.length >= 8,
);

console.log(server1);
console.log(server2);
console.log(server3);
