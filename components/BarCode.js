import React, { useState, useEffect } from 'react';
import {View, StyleSheet,Button} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const BarCode = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);


    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        };
    
        getBarCodeScannerPermissions();
      }, []);


      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        console.log('hello');
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };

    return (
        <View style={styles.container}>
             <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
   
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  } 
})

export default BarCode;
