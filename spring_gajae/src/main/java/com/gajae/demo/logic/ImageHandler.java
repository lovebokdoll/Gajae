package com.gajae.demo.logic;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import org.springframework.stereotype.Component;

@Component
public class ImageHandler {
    
    public byte[] imagehandle( String imageUrl ) {
        
        if ( imageUrl == null ) {
            return null;
        }
        
        try {
            URL               url        = new URL( imageUrl );
            HttpURLConnection connection = ( HttpURLConnection ) url.openConnection();
            connection.setRequestMethod( "GET" );
            connection.setConnectTimeout( 10000 );
            connection.setReadTimeout( 10000 );
            InputStream           inputStream = connection.getInputStream();
            ByteArrayOutputStream baos        = new ByteArrayOutputStream();
            byte[]                buffer      = new byte[1024];
            int                   bytesRead;
            
            while ( ( bytesRead = inputStream.read( buffer ) ) != -1 ) {
                baos.write( buffer, 0, bytesRead );
            }
            byte[] imageBytes = baos.toByteArray();
            inputStream.close();
            baos.close();
            connection.disconnect();
            return imageBytes;
        }
        catch ( MalformedURLException e ) {
            e.printStackTrace();
            return null;
        }
        catch ( IOException e ) {
            e.printStackTrace();
            return null;
        }
    }
}