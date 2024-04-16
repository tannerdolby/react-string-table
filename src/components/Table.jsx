export default function Table({data}) {
  if (!data || Object.keys(data) === 0) {
    throw new Error('Table requires `data`');
  }

  const {
  input,
  length,
  lowercase,
  uppercase,
  firstChar,
  lastChar,
  trimmedStart,
  trimmed,
  trimmedEnd,
  titleCase,
  acronymCase,
  camelCase,
  kebabCase,
  snakeCase,
  caesarCipher,
  randomCipher,
  asciiStr,
  hexStr,
} = data;

  return (
    <div className="string-table">
      <table>
        <thead>
          <tr>
            <th width="190px">String Variation</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <Row label='Original String' data={input} />
          <Row label='String Length' data={!length ? '' : length} />
          <Row label='Lowercase' data={lowercase} />
          <Row label='Uppercase' data={uppercase} />
          <Row label='First Character' data={firstChar} />
          <Row label='Last Character' data={lastChar} />
          <Row label='Acronym Case' data={acronymCase} />
          <Row label='Title Case' data={titleCase} />
          <Row label='camelCase' data={camelCase} />
          <Row label='kebab-case' data={kebabCase} />
          <Row label='snake_case' data={snakeCase} />
          <Row label='Caesar Cipher (ROT13)' data={caesarCipher} />
          <Row label='Random Cipher' data={randomCipher} />
          <Row label='Trimmed (start)' data={trimmedStart} />
          <Row label='Trimmed (both ends)' data={trimmed} />
          <Row label='Trimmed (end)' data={trimmedEnd} />
          <Row label='Decimal ASCII' data={asciiStr} />
          <Row label='Hex format' data={hexStr} />
        </tbody>
      </table>
      </div>
  );
}

const Row = ({ label, data }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{data}</td>
    </tr>
  );
}
