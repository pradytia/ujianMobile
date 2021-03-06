import React, { Component } from 'react';
import {View,Text, Image, TouchableWithoutFeedback,ActivityIndicator, ScrollView} from 'react-native';
import { Header,  Input,Icon } from 'react-native-elements';
import { Card, CardItem, Thumbnail, Button, Left, Body, Right } from 'native-base';
import {connect} from 'react-redux';
import { inputEditCaptionChange, saveEditPost, selectProfilePostRefresh} from '../actions';

class EditPostDetail extends Component {

    state = {
        inputCaption: this.props.captionPost 
    }

    componentDidUpdate() {
        if(this.props.captionEdit === ''){
            this.props.navigation.navigate('Profile',{
                onGoBack: () => this.props.selectedProfilePostRefresh(this.props.id),
              });
        }
    }


    render() {
        return (
            <View>
            <ScrollView>
            <Header
               placement="left"
               leftComponent={{ 
                   icon: 'clear', 
                   color: 'black',
                   onPress: () => this.props.navigation.goBack() 
               }}
               centerComponent={{ 
                   text: 'Edit Post', 
                   style: { color: 'black', fontSize: 18, fontWeight: '700' } 
               }}
               rightComponent={this.props.loading ? <ActivityIndicator size="small" color="#4388d6" /> : { 
                   icon: 'done', 
                   color: '#4388d6',
                   onPress: ()=>this.props.saveEditPost({
                       id:this.props.id,
                       caption:this.props.captionEdit,
                       imageURL:this.props.imageURL,
                       userId:this.props.userId
                   })
               }}
               containerStyle={{
                   backgroundColor: '#fff',
                   justifyContent: 'space-around',
                   elevation: 2,
                   marginTop: Platform.OS === 'ios' ? 0 : - 25
               }}
           />
          
        
          <Card>
               <CardItem>
                   <Left style={{ flex: 3 }}>
                       <Thumbnail source={{uri: this.props.userPhoto }} />
                       <Body>
                           <Text>{this.props.username}</Text>
                           <Text note>Instagrin User</Text>
                       </Body>
                   </Left>
               </CardItem>
               <CardItem cardBody>
                   <Image source={{uri: this.props.imageURL }} style={{height: 350, width: null, flex: 1}}/>
               </CardItem>     
           </Card>
           <View>
               <Input
                   placeholder='Caption'
                   value={this.props.captionEdit}
                   onChangeText={this.props.inputEditCaptionChange}
               />
           </View>
           </ScrollView>
       </View>
        );
    }
}

const mapStateToProps=({editPost,post})=>{
    return{
        ...editPost,
        ...post.selectedPostDetailProfile,
        ...post
    }
}

export default connect(mapStateToProps, { inputEditCaptionChange, saveEditPost, selectProfilePostRefresh }) (EditPostDetail);