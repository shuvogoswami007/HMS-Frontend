const FoodMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-5 p-6 sm:px-12 sm:py-10 md:px-18 lg:px-24 xl:px-30">
      <p className="w-full text-2xl not-italic font-medium tracking-wide text-center font-poppins">Food Menu</p>
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th>No.</th>
              <th>Food Name (Day)</th>
              <th>Available</th>
              <th>Food Name(Night)</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
            </tr>
            <tr className="text-center">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Blue</td>
            </tr>
            <tr className="text-center">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodMenu;
