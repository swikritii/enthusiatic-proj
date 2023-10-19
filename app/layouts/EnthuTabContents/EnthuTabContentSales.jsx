import EnthuTable from "@/app/components/EnthuTable";
import IconRefresh from "../../../public/images/icons/icon-refresh.svg";
import IconEdit from "../../../public/images/icons/icon-edit.svg";
import IconArrowDown from "../../../public/images/icons/icon-chevron-down.svg";
import EnthuInput from "@/app/components/EnthuInput";
import EnthuImage from "@/app/components/EnthuImage";

const EnthuTabContentSales = () => {
  const tableSales = [
    {
      id: 1,
      material: "Worksheets",
      quantity: 5,
    },
    {
      id: 2,
      material: "MCQs",
      quantity: "",
    },
    {
      id: 3,
      material: "Activities",
      quantity: "",
    },
    {
      id: 4,
      material: "Objectives",
      quantity: "",
    },
    {
      id: 5,
      material: "Learning Outcomes",
      quantity: "",
    },
    {
      id: 6,
      material: "Prerequisites",
      quantity: 5,
    },
    {
      id: 7,
      material: "Activities",
      quantity: "",
    },
    {
      id: 8,
      material: "Objectives",
      quantity: "",
    },
    {
      id: 9,
      material: "Learning Outcomes",
      quantity: "",
    },
  ];

  return (
    <EnthuTable
      tableBody
      tableBodyData={tableSales?.map((curElem) => {
        const { id, material, quantity } = curElem;
        return (
          <tr className="border border-b border-gray-700">
            <td className="max-w-[120px] py-[6px] pl-4 pr-9 flex">
              <EnthuInput placeholder={quantity ? quantity : "Add" } value={quantity ? quantity : "Add" } inputBlockClass="w-full" inputClass="w-[85px] py-2 px-4 text-600 text-sm border border-solid border-gray-300 rounded-[12px] text-center" />
            </td> 
            <td className="w-[390px] py-[6px] pl-4 pr-9">{material}</td>
            <td className="w-[74px] py-[6px] pl-4 pr-9">
              <EnthuImage src={IconArrowDown} alt="icon arrow down" />
            </td>
            <td className="w-[96px] py-[6px] pl-4 pr-9">
              <EnthuImage src={IconRefresh} alt="icon refresh" />
            </td>
            <td className="w-[81px] py-[6px] pl-4 pr-9">
              <EnthuImage src={IconEdit} alt="icon edit" />
            </td>
          </tr>
        );
      })}
    />
  );
};

export default EnthuTabContentSales;
