import React from "react";
import font from "../fonts/Ubuntu-Regular.ttf";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
Font.register({
  family: "Ubuntu",

  src: font,
  format: "truetype",
});

const styles = StyleSheet.create({
  // Page and Layout
  page: {
    // A default safe font
    fontFamily: "Ubuntu",
    fontSize: 11,
    padding: 30,
    lineHeight: 1.5,
    backgroundColor: "#ffffff",
    color: "#1f2937", // text-gray-800
  },
  section: {
    marginBottom: 20,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
  },

  // Header and Logo
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginHorizontal: "auto",
    marginBottom: 10,
  },
  mainHeading: {
    fontSize: 24, // text-3xl
    fontWeight: "bold", // font-bold
    textAlign: "center",
    marginBottom: 20,
  },

  // Invoice Details (Invoice No, Dates)
  invoiceDetailsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  invoiceDetail: {
    width: "23%", // for 4 columns
  },

  // From/To Sections
  fromToContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  contactBox: {
    width: "48%",
  },
  subheading: {
    fontSize: 14, // text-lg
    fontWeight: "semibold",
    color: "#4338ca", // text-indigo-700
    marginBottom: 8,
  },

  // Common Form Styles
  label: {
    fontSize: 10,
    fontWeight: "semibold",
    color: "#4b5563", // text-gray-700
    marginBottom: 4,
  },
  input: {
    border: "1px solid #d1d5db", // border-gray-300
    borderRadius: 6,
    padding: 8,
    fontSize: 11,
  },

  // Items Table
  table: {
    width: "100%",
    marginBottom: 20,
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#4338ca", // bg-indigo-600
    color: "#ffffff",
    fontWeight: "bold",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  tableHeaderCell: {
    padding: 8,
    fontSize: 10,
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid #e5e7eb", // border-gray-200
    alignItems: "center",
  },
  tableCell: {
    padding: 8,
  },
  colDescription: {
    width: "40%",
  },
  colQuantity: {
    width: "15%",
  },
  colPrice: {
    width: "20%",
  },
  colTotal: {
    width: "25%",
    textAlign: "right",
  },

  // Totals Section
  totalsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  totalsBox: {
    width: "40%",
  },
  totalRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  totalLabel: {
    fontWeight: "bold",
  },
  grandTotalRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    paddingTop: 8,
    borderTop: "1px solid #d1d5db",
  },
  grandTotalLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4338ca", // text-indigo-700
  },
  grandTotalValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4338ca",
  },

  // Terms & Footer
  terms: {
    marginTop: 40,
    fontSize: 9,
    color: "#6b7280", // text-gray-500
  },
  termsTitle: {
    fontWeight: "bold",
    marginBottom: 4,
  },
});

const PDF = ({ invoiceData, currencySymbol }) => {
  const {
    from,
    to,
    items,
    logo,
    invoiceNumber,
    poNumber,
    issueDate,
    dueDate,
    colorScheme,
    discount,
    tax,
    terms,
  } = invoiceData;

  // Calculations
  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const discountAmount = (subtotal * (discount || 0)) / 100;
  const taxableAmount = subtotal - discountAmount;
  const taxAmount = (taxableAmount * (tax || 0)) / 100;
  const total = taxableAmount + taxAmount;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          {logo && <Image src={logo} style={styles.logo} />}
          <Text style={{ ...styles.mainHeading, color: colorScheme.primary }}>
            INVOICE
          </Text>
        </View>

        {/* Invoice Details Section */}
        <View style={styles.invoiceDetailsContainer}>
          <View style={styles.invoiceDetail}>
            <Text style={styles.label}>Invoice No.</Text>
            <Text>{invoiceNumber}</Text>
          </View>
          <View style={styles.invoiceDetail}>
            <Text style={styles.label}>PO Number</Text>
            <Text>{poNumber}</Text>
          </View>
          <View style={styles.invoiceDetail}>
            <Text style={styles.label}>Issue Date</Text>
            <Text>{issueDate}</Text>
          </View>
          <View style={styles.invoiceDetail}>
            <Text style={styles.label}>Due Date</Text>
            <Text>{dueDate}</Text>
          </View>
        </View>

        {/* From/To Section */}
        <View style={styles.fromToContainer}>
          <View style={styles.contactBox}>
            <Text style={{ ...styles.subheading, color: colorScheme.primary }}>
              From
            </Text>
            <Text>{from.name}</Text>
            <Text>{from.address}</Text>
            <Text>{from.email}</Text>
            <Text>{from.phone}</Text>
          </View>
          <View style={styles.contactBox}>
            <Text style={{ ...styles.subheading, color: colorScheme.primary }}>
              To
            </Text>
            <Text>{to.name}</Text>
            <Text>{to.address}</Text>
            <Text>{to.email}</Text>
            <Text>{to.phone}</Text>
          </View>
        </View>

        {/* Items Table */}
        <View style={styles.table}>
          {/* Table Header */}
          <View
            style={{
              ...styles.tableHeader,
              backgroundColor: colorScheme.primary,
            }}
          >
            <Text
              style={{ ...styles.tableHeaderCell, ...styles.colDescription }}
            >
              Description
            </Text>
            <Text style={{ ...styles.tableHeaderCell, ...styles.colQuantity }}>
              Qty
            </Text>
            <Text style={{ ...styles.tableHeaderCell, ...styles.colPrice }}>
              Price
            </Text>
            <Text style={{ ...styles.tableHeaderCell, ...styles.colTotal }}>
              Total
            </Text>
          </View>
          {/* Table Body */}
          {items.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={{ ...styles.tableCell, ...styles.colDescription }}>
                {item.description}
              </Text>
              <Text style={{ ...styles.tableCell, ...styles.colQuantity }}>
                {item.quantity}
              </Text>
              <Text style={{ ...styles.tableCell, ...styles.colPrice }}>
                {currencySymbol}
                {item.price.toFixed(2)}
              </Text>
              <Text style={{ ...styles.tableCell, ...styles.colTotal }}>
                {currencySymbol}
                {(item.quantity * item.price).toFixed(2)}
              </Text>
            </View>
          ))}
        </View>

        {/* Totals Section */}
        <View style={styles.totalsContainer}>
          <View style={styles.totalsBox}>
            <View style={styles.totalRow}>
              <Text>Subtotal</Text>
              <Text>
                {currencySymbol}
                {subtotal.toFixed(2)}
              </Text>
            </View>
            <View style={styles.totalRow}>
              <Text>Discount ({discount}%)</Text>
              <Text>
                -{currencySymbol}
                {discountAmount.toFixed(2)}
              </Text>
            </View>
            <View style={styles.totalRow}>
              <Text>Tax ({tax}%)</Text>
              <Text>
                {currencySymbol}
                {taxAmount.toFixed(2)}
              </Text>
            </View>
            <View style={styles.grandTotalRow}>
              <Text
                style={{
                  ...styles.grandTotalLabel,
                  color: colorScheme.primary,
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  ...styles.grandTotalValue,
                  color: colorScheme.primary,
                }}
              >
                {currencySymbol}
                {total.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        {/* Terms & Conditions */}
        {terms && (
          <View style={styles.terms}>
            <Text style={styles.termsTitle}>Terms & Conditions</Text>
            <Text>{terms}</Text>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default PDF;
