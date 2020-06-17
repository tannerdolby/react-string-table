import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: "",
            strLen: null,
            strLower: "",
            strUpper: "",
            firstChar: "",
            lastChar: "",
            titleCase: "",
            initials: "",
            strTrim: "",
            camelCase: "",
            kebabCase: "",
            strASCII: "",
            strHex: "",
            rot13: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleChange(event) {
        let inputStr = event.target.value;
        let charArr = inputStr.split(" ");
        let nameInitials = charArr.map((word) => word.charAt(0).toUpperCase());
        let titleCased = charArr.map((word) => word.charAt(0).toUpperCase().concat(word.slice(1).toLowerCase())).join(" ");
        let camelCaseStr = charArr.map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase().concat(word.slice(1).toLowerCase());
        });
        let asciiStr = inputStr.split("").map((char) => char.charCodeAt(0)).join(" "); // converting to unicode
        let hexStr = inputStr.split("").map((char) => char.charCodeAt(0).toString(16)).join(" ");
        let ROT13 = () => {
            let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            return inputStr
                .toUpperCase()
                .split("")
                .map((letter) => {
                    let char = alphabet.indexOf(letter);
                    return char >= 0 ? alphabet[(char + 13) % 26] : "";
                })
                .join("");
        }
        let ceasarCipher = ROT13();
        let kebab = inputStr.split(" ").map((word) => word.toLowerCase()).join("-");
        this.setState({
            inputVal: inputStr,
            strLength: inputStr.length,
            strLower: inputStr.toLowerCase(),
            strUpper: inputStr.toUpperCase(),
            firstChar: inputStr.charAt(0),
            lastChar: inputStr.charAt(inputStr.length - 1),
            titleCase: titleCased,
            initials: nameInitials,
            strTrim: inputStr.trim(),
            camelCase: camelCaseStr,
            kebabCase: kebab,
            strASCII: asciiStr,
            strHex: hexStr,
            rot13: ceasarCipher   
        });
    }
    handleReset() {
        this.setState({
            inputVal: "",
            strLength: null,
            strLower: "",
            strUpper: "",
            firstChar: "",
            lastChar: "",
            titleCase: "",
            initials: "",
            strTrim: "",
            camelCase: "",
            kebabCase: "",
            strASCII: "",
            strHex: "",
            rot13: ""
        });
    }
    render() {
        return (
            <div>
                <MyNavComponent />
                <GetInputComponent input={this.state.inputVal} handleChange={this.handleChange} handleReset={this.handleReset} />
                <RenderInputComponent input={this.state.inputVal} strLen={this.state.strLength} strLower={this.state.strLower} strUpper={this.state.strUpper} charOne={this.state.firstChar} charLast={this.state.lastChar} initials={this.state.initials} titleCase={this.state.titleCase} trimStr={this.state.strTrim} camelStr={this.state.camelCase} kebabStr={this.state.kebabCase} strAscii={this.state.strASCII} strHex={this.state.strHex} ceasarCipher={this.state.rot13} />
                <MyFooterComponent />
            </div>
        );
    }
}

class GetInputComponent extends React.Component {
    render() {
        return (
            <div className="inputs">
                <h2>String Variation Table</h2>
                <p className="input-note">Watch out! There could be state, props or callback functions flying around behind the scenes <i className="fa fa-smile-o" aria-hidden="true" /></p>
                <div>
                    <input value={this.props.input} onChange={this.props.handleChange} id="input-field" placeholder="Enter string..." />
                    <button className="reset" onClick={this.props.handleReset}>Clear</button>
                </div>
            </div>
        );
    }
}

class RenderInputComponent extends React.Component {
    render() {
        return (
            <div className="outputs">
                <table>
                    <thead>
                        <tr>
                            <th width="190px">String Variation</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Original String</td>
                            <td>{this.props.input}</td>
                        </tr>
                        <tr>
                            <td>String Length</td>
                            <td>{this.props.strLen}</td>
                        </tr>
                        <tr>
                            <td>Lowercase</td>
                            <td>{this.props.strLower}</td>
                        </tr>
                        <tr>
                            <td>UpperCase</td>
                            <td>{this.props.strUpper}</td>
                        </tr>
                        <tr>
                            <td>First Character</td>
                            <td>{this.props.charOne}</td>
                        </tr>
                        <tr>
                            <td>Last Character</td>
                            <td>{this.props.charLast}</td>
                        </tr>
                        <tr>
                            <td>Trim String</td>
                            <td>{this.props.trimStr}</td>
                        </tr>
                        <tr>
                            <td>Acronym Case</td>
                            <td>{this.props.initials}</td>
                        </tr>
                        <tr>
                            <td>Title Case</td>
                            <td>{this.props.titleCase}</td>
                        </tr>
                        <tr>
                            <td>camelCase</td>
                            <td>{this.props.camelStr}</td>
                        </tr>
                        <tr>
                            <td>kebab-case</td>
                            <td>{this.props.kebabStr}</td>
                        </tr>
                        <tr>
                            <td>Ceasar Cipher</td>
                            <td>{this.props.ceasarCipher}</td>
                        </tr>
                        <tr>
                            <td>Decimal ASCII</td>
                            <td>{this.props.strAscii}</td>
                        </tr>
                        <tr>
                            <td>Hex format</td>
                            <td>{this.props.strHex}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

class MyNavComponent extends React.Component {
    render() {
        return (
            <div className="navbar">
                <h1><a href="https://reactstrtable.netlify.app" aria-label="home page button">StrTable.io</a></h1>
                <nav>
                    <ul>
                        <li><a href="https://github.com/tannercd" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-label="github link"/></a></li>
                        <li><a href="https://twitter.com/tannercd_" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-label="twitter link" /></a></li>
                        <li><a href="https://codepen.io/spherical" target="_blank" rel="noopener noreferrer" aria-label="codepen link"><i className="fa fa-codepen" aria-hidden="false" /></a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

class MyFooterComponent extends React.Component {
    render() {
        return (
            <div className="footer">
                <h2>Built with React</h2><img width="30px" height="30px" src="logo192.png" alt="react logo"/>
                <h2>Hosted with Netlify <i className="fa fa-bolt" aria-hidden="true" /></h2>
            </div>
        );
    }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));