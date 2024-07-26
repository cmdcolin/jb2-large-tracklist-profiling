import fs from "fs";

for (let j = 2; j < 500_000; j *= 2) {
  console.log(j);
  const tracks = [];
  for (let i = 0; i < j; i++) {
    tracks.push({
      type: "AlignmentsTrack",
      trackId: `volvox_cram_snpcoverage-${i}`,
      name: `volvox-sorted.cram ${i}`,
      category: ["Integration test"],
      assemblyNames: ["volvox"],
      adapter: {
        type: "CramAdapter",
        cramLocation: {
          uri: "volvox-sorted.cram",
        },
        craiLocation: {
          uri: "volvox-sorted.cram.crai",
        },
        sequenceAdapter: {
          type: "TwoBitAdapter",
          twoBitLocation: {
            uri: "volvox.2bit",
          },
        },
      },
    });
  }
  fs.writeFileSync(
    `${j}.json`,
    JSON.stringify({
      assemblies: [
        {
          name: "volvox",
          sequence: {
            type: "ReferenceSequenceTrack",
            trackId: "volvox_refseq",
            adapter: {
              type: "TwoBitAdapter",
              twoBitLocation: {
                uri: "volvox.2bit",
                locationType: "UriLocation",
              },
            },
          },
        },
      ],
      tracks,
    }),
  );
}
