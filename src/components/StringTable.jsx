import Header from './Header.jsx';
import Table from './Table.jsx';
import Footer from './Footer.jsx';
import { useState } from 'react';
import { caesarCipher, randomRotation } from 'rotation-cipher';

export default function StringTable() {
  const [data, setData] = useState({
    input: '',
    length: 0,
    lowercase: '',
    uppercase: '',
    firstChar: '',
    lastChar: '',
    titleCase: '',
    acronymCase: '',
    trimmedStart: '',
    trimmed: '',
    trimmedEnd: '',
    camelCase: '',
    kebabCase: '',
    snakeCase: '',
    asciiStr: '',
    hexStr: '',
    caesarCipher: '',
    randomRotation: '',
  });

  return (
    <>
      <Header
        input={data.input}
        handleChange={(e) => handleChange(e, setData)}
        handleReset={() => handleReset(setData)}
      />
      <Table
        data={data}
      />
      <Footer />
    </>
  );
}

function handleChange(e, setData) {
  const input = e.target.value;

  if (!input || typeof input !== 'string') {
    console.error('Error: invalid input string, unable to react to onChange event');
  }

  const words = input.split(' ');
  const camelCaseStr = words.map((word, index) => {
    if (index === 0) {
      return word.toLocaleLowerCase();
    }

    return word
      .charAt(0)
      .toLocaleUpperCase()
      .concat(word.slice(1).toLocaleLowerCase());
  });

  setData({
    input: input,
    length: input.length,
    lowercase: input.toLocaleLowerCase(),
    uppercase: input.toLocaleUpperCase(),
    firstChar: input.charAt(0),
    lastChar: input.charAt(input.length - 1),
    titleCase: titleCase(words),
    acronymCase: words.map((word) => word.charAt(0).toLocaleUpperCase()),
    trimmedStart: input.trimStart(),
    trimmed: input.trim(),
    trimmedEnd: input.trimEnd(),
    camelCase: camelCaseStr,
    snakeCase: input
      .split(' ')
      .join('_'),
    kebabCase: input
      .split(' ')
      .map((word) => word.toLocaleLowerCase())
      .join('-'),
    asciiStr: input
      .split('')
      .map((char) => char.charCodeAt(0))
      .join(' '),
    hexStr: input
      .split('')
      .map((char) => char.charCodeAt(0).toString(16))
      .join(' '),
    caesarCipher: caesarCipher(input),
    randomCipher: caesarCipher(input, 0, randomRotation(input)),
  });
}

function handleReset(setData) {
  setData({
    input: '',
    length: '',
    lowercase: '',
    uppercase: '',
    firstChar: '',
    lastChar: '',
    titleCase: '',
    acronymCase: '',
    trimmedStart: '',
    trimmed: '',
    trimmedEnd: '',
    camelCase: '',
    kebabCase: '',
    snakeCase: '',
    asciiStr: '',
    hexStr: '',
    rot13: '',
    randomCipher: '',
  });
}

const titleCase = (words) => {
  return words.map((word) =>
    word
      .charAt(0)
      .toLocaleUpperCase()
      .concat(word.slice(1).toLocaleLowerCase()))
      .join(' ');
}
