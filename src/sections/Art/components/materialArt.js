function MaterialArts({ material }) {
  return (
    <ul>
      {material.map((materialTitles, index) => (
        <li key={index}>
          <p>{materialTitles}</p>
        </li>
      ))}
    </ul>
  );
}

export default MaterialArts;
