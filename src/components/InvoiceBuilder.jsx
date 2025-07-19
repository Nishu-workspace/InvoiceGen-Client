import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import PDF from "./PDF";
const InvoiceBuilder = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: "",
    poNumber: "",
    issueDate: "",
    dueDate: "",
    from: { name: "", address: "", email: "", phone: "" },
    to: { name: "", address: "", email: "", phone: "" },
    logo: null,
    items: [],
    currency: "USD",
    discount: 0,
    tax: 0,
    terms: "",
    colorScheme: { primary: "#6366f1", secondary: "#a5b4fc" },
  });

  const currencySymbols = {
    USD: "$",
    EUR: "€",
    INR: "₹",
    GBP: "£",
    JPY: "¥",
    CAD: "$",
    AUD: "$",
  };

  const colorPalette = [
    { name: "Indigo", primary: "#6366f1", secondary: "#a5b4fc" },
    { name: "Emerald", primary: "#10b981", secondary: "#6ee7b7" },
    { name: "Rose", primary: "#f43f5e", secondary: "#fda4af" },
    { name: "Amber", primary: "#f59e0b", secondary: "#fcd34d" },
    { name: "Sky", primary: "#0ea5e9", secondary: "#7dd3fc" },
  ];

  const handleChange = (e, section = null) => {
    const { name, value } = e.target;
    if (section) {
      setInvoiceData((prev) => ({
        ...prev,
        [section]: { ...prev[section], [name]: value },
      }));
    } else {
      setInvoiceData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setInvoiceData((prev) => ({ ...prev, logo: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddItem = () => {
    setInvoiceData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        { description: "", quantity: 1, price: 0, total: 0 },
      ],
    }));
  };

  const handleRemoveItem = (index) => {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const handleItemChange = (index, field, value) => {
    const newItems = invoiceData.items.map((item, i) => {
      if (i === index) {
        const updatedItem = { ...item, [field]: value };
        updatedItem.total = updatedItem.quantity * updatedItem.price;
        return updatedItem;
      }
      return item;
    });
    setInvoiceData((prev) => ({ ...prev, items: newItems }));
  };

  const calculateSubtotal = () => {
    return invoiceData.items.reduce((sum, item) => sum + item.total, 0);
  };

  const subtotal = calculateSubtotal();
  const discount = (subtotal * (invoiceData.discount || 0)) / 100;
  const taxable = subtotal - discount;
  const tax = (taxable * (invoiceData.tax || 0)) / 100;
  const total = taxable + tax;

  // const handleDownloadPDF = () => {
  //   const doc = new jsPDF();
  //   const { primary, secondary } = invoiceData.colorScheme;

  //   doc.setFontSize(28);
  //   doc.setTextColor(...hexToRgb(primary));
  //   doc.setFont("helvetica", "bold");
  //   doc.text("INVOICE", 200, 25, null, null, "right");

  //   doc.setFontSize(10);
  //   doc.setTextColor(...hexToRgb(secondary));
  //   doc.setFont("helvetica", "normal");
  //   doc.text(`Invoice No: ${invoiceData.invoiceNumber}`, 15, 50);
  //   doc.text(`PO No: ${invoiceData.poNumber}`, 15, 56);
  //   doc.text(`Issue Date: ${invoiceData.issueDate}`, 15, 62);
  //   doc.text(`Due Date: ${invoiceData.dueDate}`, 15, 68);

  //   doc.setFont("helvetica", "normal");
  //   doc.setFontSize(10);
  //   doc.setTextColor(0, 0, 0);

  //   doc.text(invoiceData.from.name, 15, 80);
  //   doc.text(invoiceData.from.address, 15, 86);
  //   doc.text(invoiceData.from.email, 15, 92);
  //   doc.text(invoiceData.from.phone, 15, 98);

  //   doc.text(invoiceData.to.name, 105, 80);
  //   doc.text(invoiceData.to.address, 105, 86);
  //   doc.text(invoiceData.to.email, 105, 92);
  //   doc.text(invoiceData.to.phone, 105, 98);

  //   autoTable(doc, {
  //     startY: 110,
  //     head: [["Description", "Quantity", "Unit Price", "Total"]],
  //     body: invoiceData.items.map((item) => [
  //       item.description,
  //       item.quantity,
  //       `${currencySymbols[invoiceData.currency]}${item.price}`,
  //       `${currencySymbols[invoiceData.currency]}${item.total}`,
  //     ]),
  //     theme: "striped",
  //     headStyles: {
  //       fillColor: hexToRgb(primary),
  //       textColor: [255, 255, 255],
  //       fontSize: 11,
  //       fontStyle: "bold",
  //       halign: "left",
  //     },
  //     styles: {
  //       fontSize: 10,
  //       cellPadding: 5,
  //     },
  //     alternateRowStyles: {
  //       fillColor: [245, 245, 245],
  //     },
  //   });

  //   const finalY = doc.lastAutoTable.finalY + 10;
  //   doc.text(
  //     `Subtotal: ${currencySymbols[invoiceData.currency]}${subtotal.toFixed(
  //       2
  //     )}`,
  //     140,
  //     finalY
  //   );
  //   doc.text(
  //     `Discount: ${currencySymbols[invoiceData.currency]}${discount.toFixed(
  //       2
  //     )}`,
  //     140,
  //     finalY + 6
  //   );
  //   doc.text(
  //     `Tax: ${currencySymbols[invoiceData.currency]}${tax.toFixed(2)}`,
  //     140,
  //     finalY + 12
  //   );
  //   doc.setFont("helvetica", "bold");
  //   doc.setFontSize(14);
  //   doc.setTextColor(...hexToRgb(primary));
  //   doc.text(
  //     `Total: ${currencySymbols[invoiceData.currency]}${total.toFixed(2)}`,
  //     140,
  //     finalY + 18
  //   );

  //   if (invoiceData.terms) {
  //     doc.setFont("helvetica", "normal");
  //     doc.setFontSize(10);
  //     doc.setTextColor(0, 0, 0);
  //     doc.text("Terms & Conditions:", 15, finalY + 28);
  //     doc.text(invoiceData.terms, 15, finalY + 34);
  //   }

  //   doc.save("invoice.pdf");
  // };

  // const hexToRgb = (hex) => {
  //   const bigint = parseInt(hex.replace("#", ""), 16);
  //   const r = (bigint >> 16) & 255;
  //   const g = (bigint >> 8) & 255;
  //   const b = bigint & 255;
  //   return [r, g, b];
  // };
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8 bg-white rounded-xl shadow-lg border border-gray-200 mt-4">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        AI Smart Invoice Builder
      </h1>

      <div className="text-center">
        <label className="block text-sm font-semibold text-gray-700">
          Upload Logo
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleLogoUpload}
          className="mx-auto"
        />
        {invoiceData.logo && (
          <img
            src={invoiceData.logo}
            alt="Logo Preview"
            className="h-20 mx-auto mt-2"
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Invoice No.
          </label>
          <input
            name="invoiceNumber"
            onChange={handleChange}
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            PO Number
          </label>
          <input
            name="poNumber"
            onChange={handleChange}
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Issue Date
          </label>
          <input
            name="issueDate"
            type="date"
            onChange={handleChange}
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Due Date
          </label>
          <input
            name="dueDate"
            type="date"
            onChange={handleChange}
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {["from", "to"].map((role) => (
          <div key={role}>
            <h2 className="text-lg font-semibold text-indigo-700 capitalize">
              {role === "from" ? "Invoiced From" : "Issued To"}
            </h2>
            {["name", "address", "email", "phone"].map((field, idx) =>
              field === "address" ? (
                <textarea
                  key={idx}
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  onChange={(e) => handleChange(e, role)}
                  className="rounded-md border border-gray-300 p-2 w-full mt-2"
                />
              ) : (
                <input
                  key={idx}
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  onChange={(e) => handleChange(e, role)}
                  className="rounded-md border border-gray-300 p-2 w-full mt-2"
                />
              )
            )}
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-semibold text-indigo-700">Items</h2>
        {invoiceData.items.map((item, index) => (
          <div key={index} className="grid grid-cols-5 gap-2 mb-2">
            <input
              placeholder="Description"
              value={item.description}
              onChange={(e) =>
                handleItemChange(index, "description", e.target.value)
              }
              className="rounded-md border border-gray-300 p-2"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={item.quantity}
              onChange={(e) =>
                handleItemChange(index, "quantity", parseFloat(e.target.value))
              }
              className="rounded-md border border-gray-300 p-2"
            />
            <input
              type="number"
              placeholder="Price"
              value={item.price}
              onChange={(e) =>
                handleItemChange(index, "price", parseFloat(e.target.value))
              }
              className="rounded-md border border-gray-300 p-2"
            />
            <input
              type="number"
              value={item.total.toFixed(2)}
              readOnly
              className="rounded-md border border-gray-300 p-2 bg-gray-100"
            />
            <button
              onClick={() => handleRemoveItem(index)}
              className="bg-red-500 text-white px-2 rounded-md"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          onClick={handleAddItem}
          className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
        >
          + Add Item
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block font-semibold text-gray-700">Currency</label>
          <select
            name="currency"
            value={invoiceData.currency}
            onChange={handleChange}
            className="rounded-md border border-gray-300 p-2 w-full"
          >
            {Object.keys(currencySymbols).map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-semibold text-gray-700">
            Discount (%)
          </label>
          <input
            type="number"
            name="discount"
            value={invoiceData.discount}
            onChange={handleChange}
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Tax (%)</label>
          <input
            type="number"
            name="tax"
            value={invoiceData.tax}
            onChange={handleChange}
            className="rounded-md border border-gray-300 p-2 w-full"
          />
        </div>
      </div>

      <div className="text-right text-sm text-gray-700 space-y-1">
        <div>
          <strong>Subtotal:</strong> {currencySymbols[invoiceData.currency]}
          {subtotal.toFixed(2)}
        </div>
        <div>
          <strong>Discount:</strong> {currencySymbols[invoiceData.currency]}
          {discount.toFixed(2)}
        </div>
        <div>
          <strong>Tax:</strong> {currencySymbols[invoiceData.currency]}
          {tax.toFixed(2)}
        </div>
        <div className="text-lg">
          <strong>Total:</strong> {currencySymbols[invoiceData.currency]}
          {total.toFixed(2)}
        </div>
      </div>

      <div>
        <label className="block font-semibold text-gray-700">
          Terms & Conditions (Link or Text)
        </label>
        <textarea
          name="terms"
          value={invoiceData.terms}
          onChange={handleChange}
          className="rounded-md border border-gray-300 p-2 w-full"
        />
      </div>

      <div>
        <label className="block font-semibold text-gray-700">
          Select Color Scheme
        </label>
        <div className="flex gap-2 mt-2">
          {colorPalette.map((color, idx) => (
            <div
              key={idx}
              onClick={() =>
                setInvoiceData((prev) => ({ ...prev, colorScheme: color }))
              }
              className="w-8 h-8 rounded-full border-2 cursor-pointer hover:scale-110 transition-transform"
              style={{ backgroundColor: color.primary }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <PDFDownloadLink
          className="inline-block px-8 py-3 text-lg font-bold text-white bg-indigo-600 border border-transparent rounded-md shadow-lg hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          document={
            <PDF
              invoiceData={invoiceData}
              currencySymbol={currencySymbols[invoiceData.currency]}
            />
          }
        >
          Download
        </PDFDownloadLink>
        {/* <button
          onClick={handleDownloadPDF}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
        >
          Download PDF
        </button> */}
      </div>
    </div>
  );
};

export default InvoiceBuilder;
