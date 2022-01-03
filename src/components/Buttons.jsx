function Button ({ click = () => {}, children }) {
   return (
      <button
         className="
         mt-[4.75rem]
         py-3
         px-16
         active:scale-110
         transition-transform
         rounded-full
         bg-med-green
         dark:bg-med-green/80
         text-xl
         text-white
         transition-shadow
         shadow-lg
         shadow-med-green/30
         hover:shadow-xl
         hover:shadow-med-green/40
         dark:shadow-transparent
         "
         onClick={click}
      >{ children }</button>
   );
}

export default Button;