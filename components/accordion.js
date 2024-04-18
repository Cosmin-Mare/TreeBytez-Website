export default function Accordion(props) {
  return (
    <div className="border rounded-md mb-1 text-[#384a41] flex flex-col items-center justify-center">
      <button
        className="w-[95%] p-4 text-left bg-[#EEE7D7]  
                           hover:bg-[#f1e4c7] border-[#384a41] border-8 text-[#384a41] transition duration-300 text-div"
        onClick={props.toggleAccordion}
      >
        {props.title}
        <span
          className={`float-right transform ${
            props.isOpen ? "rotate-180" : "rotate-0"
          }  
                                 transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>

      <div
        className="p-4 bg-[#EEE7D7] text-[#384a41] w-[95%] text-div"
        style={{
          transition: "all 0.5s ease-in-out",
          overflow: "hidden",
          padding: `${props.isOpen ? "16px" : 0}`,
          maxHeight: `${props.isOpen ? "10rem" : 0}`,
        }}
      >
        {props.data}
      </div>
    </div>
  );
}
