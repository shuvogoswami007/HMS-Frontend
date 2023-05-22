const Security = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-5 p-6 sm:px-12 sm:py-10 md:px-18 lg:px-24 xl:px-30">
      <p className="w-full text-2xl not-italic font-medium tracking-wide text-center font-poppins">Security</p>
      <div className="w-full overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th>Security Name</th>
              <th>Duty Time</th>
              <th>Call</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>
                <button className="px-3 py-2.5 bg-blue-400 text-white rounded-lg">Call</button>
              </td>
            </tr>
            <tr className="text-center">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>
                <button className="px-3 py-2.5 bg-blue-400 text-white rounded-lg">Call</button>
              </td>
            </tr>
            <tr className="text-center">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>
                <button className="px-3 py-2.5 bg-blue-400 text-white rounded-lg">Call</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Security;
