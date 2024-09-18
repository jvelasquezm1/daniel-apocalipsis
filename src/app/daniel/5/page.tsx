import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { memo } from "react";

const Chapter5 = () => {
  return (
    <DefaultLayout>
      <div className="min-h-[100vh] p-4">
        <h2 className="mb-3 border-b pb-4 text-center text-3xl font-extrabold">
          Capitulo 1
        </h2>
        <p className="mb-3">Descripcion</p>
        <div className="rounded-lg">
          <h2 className="mb-5 text-2xl font-extrabold">Datos interesantes</h2>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default memo(Chapter5);
