import React, { Component } from 'react';
import {
    Content,
    Text,
    Header,
    Container,
    Form,
    Item,
    Input,
    Textarea,
    Label,
    Button,
    Footer,
    Body,
    Title,
    ListItem, 
    CheckBox,
    Radio,
    Right,
    Left,
    Picker,
    FooterTab,
    Icon,
    List
} from 'native-base'
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export default class TambahATCS extends Component{

    state = {
        checkedName: "",
        checkedName2: "",
        selectedName: "",
        items: [{
            id: 1,
            name: "Fashion Wanita",
            condition: false
        },
        {
            id: 2,
            name: "Fashion Pria",
            condition: false
        },
        {
            id: 3,
            name: "Fashion Muslim",
            condition: false
        },
        {
            id: 4,
            name: "Fashion Anak",
            
        },
        {
            id: 5,
            name: "Handphone dan Tablet",
            
        },
        {
            id: 6,
            name: "Elektronik",
            
        },
        {
            id: 7,
            name: "Kecantikan",
            
        },
        {
            id: 8,
            name: "Kesehatan",
            
        },
        {
            id: 9,
            name: "Ibu dan bayi",
            
        },
        {
            id: 10,
            name: "Perawatan tubuh",
            
        },
        {
            id: 11,
            name: "Rumah Tangga",
            
        },
        {
            id: 12,
            name: "Gaming",
            
        },
        {
            id: 13,
            name: "Laptop dan Aksesoris",
            
        },
        {
            id: 14,
            name: "Komputer dan Aksesoris",
            
        },
        {
            id: 15,
            name: "Kamera",
            
        },
        {
            id: 16,
            name: "Otomotif",
            
        },
        {
            id: 17,
            name: "Olahraga",
            
        },
        {
            id: 18,
            name: "Film dan Musik",
            
        },
        {
            id: 19,
            name: "Dapur",
            
        },
        {
            id: 20,
            name: "Office dan Stationeri",
            
        },
        {
            id: 21,
            name: "Sofenir dan Kado",
            
        },
        {
            id: 22,
            name: "Mainan dan Hobi",
            
        },
        {
            id: 23,
            name: "Makanan dan Minuman",
            
        },
        {
            id: 24,
            name: "Buku",
            
        },
        {
            id: 25,
            name: "Software",
            
        },
        {
            id: 26,
            name: "Produk Lainya",
            
        },
        ],

        check: [],

        items2: [{
            id: 1,
            name: "JNE"
        },
        {
            id: 2,
            name: "TIKI"
        },
        {
            id: 3,
            name: "WAHANA"
        },
        {
            id: 4,
            name: "GO-JEK"
        },
        {
            id: 5,
            name: "POS Indonesia"
        },
        {
            id: 6,
            name: "First"
        },
        {
            id: 7,
            name: "SiCepat"
        },
        {
            id: 8,
            name: "J&T"
        }
        ],

        items3: [{
            id: 1,
            name: "Selalu Tersedia"
        },
        {
            id: 2,
            name: "Stock Terbatas"
        },
        {
            id: 3,
            name: "Stock Kosong"
        }],
        selected1: "key0"
    }

    onValueChange(value) {
        this.setState({
          selected1: value
        });
      }



    checkRadio(name){
        this.setState({
            selectedName: name
        })

        if(this.state.selectedName == name)
        {
            this.setState({
                selectedName: ""
            })
        }
    }

    addCheck(set) {

        if (!this.state.check.includes(set)) {
          getCheck = this.state.check
          getCheck.push(set)
          this.setState({
            check: getCheck
          })
        }
    
        else{
            geCheck = this.state.check
            geCheck = geCheck.filter(item => item !== set)
            this.setState({
              check: geCheck
            })
        }
    
      }

      addCheck2(set) {

        if (!this.state.check.includes(set)) {
          getCheck = this.state.check
          getCheck.push(set)
          this.setState({
            check: getCheck
          })
        }
    
        else{
            geCheck = this.state.check
            geCheck = geCheck.filter(item => item !== set)
            this.setState({
              check: geCheck
            })
        }
    
      }

    render(){
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>
                            Tambah Lapak
                        </Title>
                    </Body>
                </Header>
                <Content padder>
                <Form>
                    <Picker
                        iosHeader="Asisten Lapangan Terdekat"
                        androidHeader="Asisten Lapangan Terdekat"
                        mode="modal"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}
                        style={{marginLeft: -7, marginBottom: 10}}
                        >
                        
                        <Picker.Item label="Asisten Lapangan Terdekat" value="key0" />
                        <Picker.Item label="Algojo" value="key1" />
                        <Picker.Item label="Sumanto" value="key2" />
                        <Picker.Item label="Diwan" value="key3" />
                        <Picker.Item label="Supri" value="key4" />
                    </Picker>

                    <Label>Nama Toko</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>Slogan</Label>
                    <Item regular>
                        <Input />
                    </Item>
                    
                    <Label style={styles.batasAtas}>Logo Toko</Label>
                    <Button transparent onPress={()=> {alert("Coming Soon")}}>
                        <Text style={styles.fileChooser}>TAMBAHKAN FILE</Text>
                    </Button>

                    <Label style={styles.batasAtas}>Deskripsi</Label>
                    <Textarea rowSpan={5} bordered/>

                    <Label style={styles.batasAtas}>Alamat Lengkap</Label>
                    <Textarea rowSpan={5} bordered/>

                    <Label style={styles.batasAtas}>Kota</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>Kode Pos</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>Situs Web</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>No Telp</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>Alamat Email</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>Nama Bank dan No Rek.</Label>
                    <Item regular>
                        <Input />
                    </Item>

                    <Label style={styles.batasAtas}>Jenis barang (Kategori)</Label>

                    {this.state.items.map((items, key) => (
                        <ListItem key={key} style={styles.iteme}>
                            <CheckBox onPress={() => this.addCheck(items.id)} checked={this.state.check.includes(items.id) ? true : false} />
                        <Body>
                            <Text>{items.name}</Text>
                        </Body>
                        </ListItem>
                    ))}

                    {/* {this.state.check.map((check, key) => (
                        <Text key={key}>{check}</Text>
                    ))} */}


                    
                    
                    <Label style={styles.batasAtas}>Status Produk (Kategori)</Label>
                    
                    {this.state.items3.map((item, index)=> {
                        return(
                            <ListItem key={item.name} style={styles.iteme}>
                                <Radio selected = {item.name == this.state.selectedName ? true : false} onPress={()=> this.checkRadio(item.name)} />
                                <Body>
                                <Text>{item.name}</Text>
                                </Body>
                            </ListItem>
                        )
                    } )}
                    
                    <Label style={styles.batasAtas}>Jasa Pengiriman</Label>

                    {this.state.items2.map((items, key) => (
                        <ListItem key={key} style={styles.iteme}>
                            <CheckBox onPress={() => this.addCheck2(items.id)} checked={this.state.check.includes(items.id) ? true : false} />
                        <Body>
                            <Text>{items.name}</Text>
                        </Body>
                        </ListItem>
                    ))}

                    {/* {this.state.check.map((check, key) => (
                        <Text key={key}>{check}</Text>
                    ))} */}

                    <ListItem>
                        <Button style={styles.buttone}>
                            <Text style={styles.labelBtn}>Submit</Text>
                        </Button>
                    </ListItem>
                </Form>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button>
                            <Icon name="home" />
                        </Button>
                        <Button>
                            <Icon name="cart" />
                        </Button>
                        <Button active>
                            <Icon name="settings" />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    buttone:{
        width: '70%',
        height: 40,
        marginLeft: 43,
    },

    iteme:{
        marginLeft: -0.1
    },

    batasAtas:{
        marginTop: 10
    },

    labelBtn:{
        marginLeft: 55
    },

    label:{
        margin: 20
    },

    fileChooser:{
        color: '#156af2',
        marginLeft: -17
    }
})