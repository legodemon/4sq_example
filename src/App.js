import React, {Component} from 'react';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header-menu">
                    <div className="header-menu-titles">
                        <div className="header-menu-titles__title">4sq venues</div>
                    </div>
                    <div className="header-menu-buttons">
                        <div className="header-menu-buttons__button">Login</div>
                        <div className="header-menu-buttons__button">My Places</div>
                        <div className="header-menu-buttons__button">Logout</div>
                    </div>
                </div>

                <div className="search">
                    <input className="search__input" placeholder="Search location here..."/>
                </div>

                <div className="places">

                    <div className="place">
                        <div className="place__tile">Title</div>
                        <div className="place-body">
                            <div className="place-body__description">
                                Fusce ut luctus metus, vitae efficitur enim. Sed
                                laoreet odio at felis ultrices, vitae fermentum nunc dapibus. Nullam justo augue,
                                fringilla at dolor vel, tempor efficitur justo. Vestibulum orci dui, egestas ac volutpat
                                at, varius quis elit. Aliquam a iaculis purus. Cras luctus nulla non tempus porta. Proin
                                nec nisi nulla. Nunc in posuere magna. Fusce rutrum tortor eget purus finibus, at
                                interdum nibh placerat.
                            </div>
                            <div className="place-body__photo">
                                <img src="http://via.placeholder.com/70x70"/>
                            </div>
                        </div>
                        <div className="place-body__bookmark">BookMark Place</div>
                    </div>





                </div>

            </div>
        );
    }
}

export default App;
