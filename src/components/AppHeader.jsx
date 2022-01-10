function AppHeader ({ title }) {
   return (
      <header className="
         sticky
         top-0
         left-0

         flex
         flex-row
         justify-between
         items-center

         p-8
         w-full
         h-[75px]

         bg-white
         dark:bg-[#182d51]
         border-b-2
         border-med-blue/20

         text-med-blue
         font-noto
      "
      >{title}</header>
   );
}

export default AppHeader;