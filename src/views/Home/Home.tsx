import React from "react";

class Home extends React.Component {

    render() {
        return (
            <div id="home" className="bx--grid bx--grid--full-width">
                <div id="no-container">
                    <p id="no" data-content="NO">
                        NO
                    </p>
                </div>
                <div id="source-container">
                    <a id="source" href="https://www.eia.gov/energyexplained/oil-and-petroleum-products/prices-and-outlook.php">
                        source
                    </a>
                </div>
            </div>
        )
    }

}

export default Home;