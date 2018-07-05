import * as React from 'react';
import {View, Picker} from 'react-native';
import {Button} from 'react-native-elements';

class AllTaskScreenHeader extends React.Component {
    state = {

    }

    renderPickerItems = (pickerTitles = ['Completed','In Progress','On Delay','Planning']) => {
        return pickerItems = pickerTitles.map((element, index) => {
            return (<Picker.Item label={element} key={index} value={element}/>);
        });
    }

    render() {
        return (
            <View>
                <Text>{this.props.title}</Text>
                <View>
                    <Button />
                    <Picker >
                        {this.renderPickerItems()}
                    </Picker>
                    <Button />
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-around',
        paddingLeft: 5,
        paddingRight: 5,
        height: 80,
    },
    title: {
        textAlign: 'center',
        fontSize: 15,
        fontStyle: 'bold',
        flex: 1
    },
    buttonsWrapper: {
        flexDirection: 'row',
        flex: 3,
        justifyContent: 'space-around',
    }
}

export default AllTaskScreenHeader;
