import React from "react";

class Home extends React.Component {

    render() {
        return (
            <div id="home" className="bx--grid bx--grid--full-width">
                <div id="container1">
                    <div id="container2">
                        <p id="no">
                            NO
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

export default Home;