import {connect} from "react-redux";
import Civilization from "./Civilization";
import {newCityActionCreator} from "../State/CityReducer";


const mapStateToProps = (state) => ({
    state: state.state,
})

const mapDispatchToProps = (dispatch) => ({
    onCityAdd: (id) => {
        dispatch(newCityActionCreator(id));
    }
})

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Civilization);

export default ProfileContainer;