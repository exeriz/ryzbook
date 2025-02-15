import { Svg } from "@/components/Optimizing/Svg";

export function NotFound() {
  return (
    <div className="col-span-full flex flex-col justify-center mt-2 rounded-lg text-center border border-dashed border-gray-900/25 px-6 py-10 box-shadow-2">
      <div className="flex justify-center items-center box-shadow-1 size-14 mx-auto rounded-full">
        <Svg
          width={32}
          height={32}
          fill="#6b7280"
          draw={[
            "M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z",
            "M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z",
          ]}
          className="mx-auto"
        />
      </div>
      <div className="mt-4">
        <h5 className="text-lg text-gray-800 font-semibold text-shadow-2">
          All messages appear here
        </h5>
      </div>
    </div>
  );
}
