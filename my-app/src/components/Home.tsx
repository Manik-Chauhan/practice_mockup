import React from "react";

export default function Home() {
  return (
    <>
      <div className=" font-semibold w-full  bg-dash-color">
        <div className="flex flex-row-reverse p-5 mr-3">
          <div className="mr-4">Admin</div>
          <div className="mr-4">En</div>
        </div>

        <h1 className="text-2xl font-semibold m-8 ml-20 mb-4">
          Verified Voters
        </h1>
        <h5 className="ml-20 mb-2">
          Home {">"} Dashboard {">"} Verfied Voters{" "}
        </h5>
        <div className="p-12 bg-white">
          <h1 className="">Verified Voters</h1>
          <table className="table-auto m-5">
            <thead className="">
              <tr className="p-5">
                <th className="p-5">.</th>
                <th>Name</th>
                <th>Constituency</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Date</th>
                <th>Status</th>
                <th className="p-5">Attach Document</th>
                <th className="p-5">Action</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="m-5">
                <td className="m-5">1</td>
                <td>Vote</td>
                <td>USA</td>
                <td>voter@evoting.com</td>
                <td className="p-5">789456123000</td>
                <td className="p-5">2021-10-15 06:58:24</td>
                <td className="p-5">Verified</td>
                <td className="p-5">(No Document Found)</td>
                <td className="p-5">Options</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div><hr className="border-gray-600 mt-96"/>
                <p className="w-full text-center my-12 text-gray-600">Copyright © 2020 Besnik Creative</p></div>
      </div>
    </>
  );
}
