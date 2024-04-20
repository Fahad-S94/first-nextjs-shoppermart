export default function FormInputs() {
  return (
    <>
      <label htmlFor="titleIn">Title</label>
      <input id="titleIn" type="text" placeholder="Title" />

      <label htmlFor="priceIn">Price</label>
      <input id="priceIn" type="number" placeholder="Price" />

      <label htmlFor="categoryIn">Category</label>
      <select name="" id="categoryIn" defaultValue="0">
        <option disabled value="0">
          Select Category
        </option>
        <option value="">Cars</option>
        <option value="">Electronic</option>
        <option value="">Properties</option>
      </select>

      <label htmlFor="descriptionIn">Description</label>
      <textarea name="" id="descriptionIn" placeholder="description"></textarea>

      <label htmlFor="contactIn">Contact Info</label>
      <textarea
        name=""
        id="contactIn"
        placeholder="phone #:438 979 9666"
      ></textarea>
    </>
  );
}
