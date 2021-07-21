import React from "react";
import "./App.scss";

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div id="app" className="bx--grid bx--grid--full-width">
                <div id="container1">
                    <div id="container2">
                        <p id="no">
                            no.
                        </p>
                    </div>
                </div>
                <div id="container3">
                    <a id="source" href="https://www.eia.gov/energyexplained/oil-and-petroleum-products/prices-and-outlook.php">
                        source
                    </a>
                </div>
            </div>
        )
    }
}

export default App;