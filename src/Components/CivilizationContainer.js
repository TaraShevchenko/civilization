import {connect} from "react-redux";
import Civilization from "./Civilization";
import {
    newCityActionCreator,
    levelUpActionCreator,
    smileChangeActionCreator,
    cogChangeActionCreator,
    cityDeleteActionCreator, typeChangeActionCreator
} from "../State/CityReducer";


const mapStateToProps = (state) => ({
    state: state.state,
})

const mapDispatchToProps = (dispatch) => ({
    onCityAdd: () => {
        dispatch(newCityActionCreator());
    },
    onLevelUp: (id) => {
        dispatch(levelUpActionCreator(id));
    },
    onSmileChange: (id) => {
        dispatch(smileChangeActionCreator(id));
    },
    onCogChange: (id) => {
        dispatch(cogChangeActionCreator(id));
    },
    cityDelete: (id) => {
        dispatch(cityDeleteActionCreator(id));
    },
    changeType: (id, value) => {
        dispatch(typeChangeActionCreator(id, value));
    },
})

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Civilization);

export default ProfileContainer;