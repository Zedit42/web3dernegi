import React from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import { Button, Col, UncontrolledTooltip } from "reactstrap";

class Datepicker extends React.Component {
  state = {};
  render() {
    return (
      <>
        {/* Linkleri degisken olarak atarsaniz muhtemelen calisir olmazsa discorddan bana ulasabilirsiniz */}
        <Col lg="3" md="6">
          <CopyToClipboard
            text={"https://twitter.com/ahbap/status/1622963311514996739"}
            onCopy={() => this.setState({ copiedText: "active-40" })}
          >
            <Button
              className="btn-icon-clipboard"
              id="tooltip982655500"
              type="button"
            >
              <div>
                <i className="ni ni-active-40" />
                <span className="flex max-sm:text-sm max-sm:font-extralight">https://twitter.com/ahbap/status/1622963311514996739</span>
              </div>
            </Button>
          </CopyToClipboard>
          <UncontrolledTooltip
            delay={0}
            trigger="hover focus"
            target="tooltip982655500"
          >
            {this.state.copiedText === "active-40"
              ? <p className=" text-center bg-white p-2 rounded-md border border-black">Copied</p>
              : <p className=" text-center bg-white p-2 rounded-md border border-black">Copy</p>}
          </UncontrolledTooltip>
        </Col>
      </>
    );
  }
}

export default Datepicker;