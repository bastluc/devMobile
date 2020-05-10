package com.example.sms_app;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ListView;
import android.widget.SimpleCursorAdapter;
import android.widget.TextView;
import android.widget.Toast;

import org.w3c.dom.Text;

public class MainActivity extends AppCompatActivity {

    private static final int MY_PERMISSIONS_REQUEST_READ_CONTACTS = 1;
    private static final int MY_PERMISSIONS_REQUEST_SEND_SMS = 2;
    private static final int MY_PERMISSIONS_REQUEST_RECEIVE_SMS = 3;
    private static final int MY_PERMISSIONS_REQUEST_READ_SMS = 4;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        showPhoneStatePermission();
        Button btn2 = (Button)findViewById(R.id.btn2);
        Button btn3 = (Button)findViewById(R.id.btn3);
        Button btn4 = (Button)findViewById(R.id.btn4);
    }

    public void HandleSmsActivity(View view) {
        Intent intent = new Intent(MainActivity.this,SmsActivity.class);
        startActivity(intent);
    }

    public void HandleParamActivity(View view) {
        Intent intent = new Intent(MainActivity.this,ParametersActivity.class);
        startActivity(intent);
    }
    public void HandleContactsActivity(View view) {
        Intent intent = new Intent(MainActivity.this,MainActivity.class);
        startActivity(intent);
    }


    private void showPhoneStatePermission() {
        int permissionCheck = ContextCompat.checkSelfPermission(
                this, Manifest.permission.READ_CONTACTS);
        int permissionCheck2 = ContextCompat.checkSelfPermission(
                this, Manifest.permission.SEND_SMS);
        int permissionCheck3 = ContextCompat.checkSelfPermission(
                this, Manifest.permission.RECEIVE_SMS);
        int permissionCheck4 = ContextCompat.checkSelfPermission(
                this, Manifest.permission.READ_SMS);

        if (permissionCheck != PackageManager.PERMISSION_GRANTED) {
            if (ActivityCompat.shouldShowRequestPermissionRationale(this,
                    Manifest.permission.READ_CONTACTS)) {
                showExplanation("Permission Needed", "Accept the following permission", Manifest.permission.READ_CONTACTS, MY_PERMISSIONS_REQUEST_READ_CONTACTS);
            } else {
                requestPermission(Manifest.permission.READ_CONTACTS, MY_PERMISSIONS_REQUEST_READ_CONTACTS);
            }
        } else {
            Toast.makeText(MainActivity.this, "Permission (already) Granted!", Toast.LENGTH_SHORT).show();
        }



        if (permissionCheck2 != PackageManager.PERMISSION_GRANTED) {
            if (ActivityCompat.shouldShowRequestPermissionRationale(this,
                    Manifest.permission.SEND_SMS)) {
                showExplanation("Permission Needed", "Accept the following permission", Manifest.permission.SEND_SMS, MY_PERMISSIONS_REQUEST_SEND_SMS);
            } else {
                requestPermission(Manifest.permission.SEND_SMS, MY_PERMISSIONS_REQUEST_SEND_SMS);
            }
        } else {
            Toast.makeText(MainActivity.this, "Permission (already) Granted!", Toast.LENGTH_SHORT).show();
        }

        if (permissionCheck3 != PackageManager.PERMISSION_GRANTED) {
            if (ActivityCompat.shouldShowRequestPermissionRationale(this,
                    Manifest.permission.RECEIVE_SMS)) {
                showExplanation("Permission Needed", "Accept the following permission", Manifest.permission.RECEIVE_SMS, MY_PERMISSIONS_REQUEST_RECEIVE_SMS);
            } else {
                requestPermission(Manifest.permission.RECEIVE_SMS, MY_PERMISSIONS_REQUEST_RECEIVE_SMS);
            }
        } else {
            Toast.makeText(MainActivity.this, "Permission (already) Granted!", Toast.LENGTH_SHORT).show();
        }

        if (permissionCheck4 != PackageManager.PERMISSION_GRANTED) {
            if (ActivityCompat.shouldShowRequestPermissionRationale(this,
                    Manifest.permission.READ_SMS)) {
                showExplanation("Permission Needed", "Accept the following permission", Manifest.permission.READ_SMS, MY_PERMISSIONS_REQUEST_READ_SMS);
            } else {
                requestPermission(Manifest.permission.READ_SMS, MY_PERMISSIONS_REQUEST_READ_SMS);
            }
        } else {
            Toast.makeText(MainActivity.this, "Permission (already) Granted!", Toast.LENGTH_SHORT).show();
        }
    }
    @Override
    public void onRequestPermissionsResult(
            int requestCode,
            String permissions[],
            int[] grantResults) {
        switch (requestCode) {
            case MY_PERMISSIONS_REQUEST_READ_CONTACTS:
                if (grantResults.length > 0
                        && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    Toast.makeText(MainActivity.this, "Permission Granted!", Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(MainActivity.this, "Permission Denied!", Toast.LENGTH_SHORT).show();
                }
            case MY_PERMISSIONS_REQUEST_SEND_SMS:
                if (grantResults.length > 0
                        && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    Toast.makeText(MainActivity.this, "Permission Granted!", Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(MainActivity.this, "Permission Denied!", Toast.LENGTH_SHORT).show();
                }
            case MY_PERMISSIONS_REQUEST_RECEIVE_SMS:
                if (grantResults.length > 0
                        && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    Toast.makeText(MainActivity.this, "Permission Granted!", Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(MainActivity.this, "Permission Denied!", Toast.LENGTH_SHORT).show();
                }
            case MY_PERMISSIONS_REQUEST_READ_SMS:
                if (grantResults.length > 0
                        && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    Toast.makeText(MainActivity.this, "Permission Granted!", Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(MainActivity.this, "Permission Denied!", Toast.LENGTH_SHORT).show();
                }
        }
    }

    private void showExplanation(String title,
                                 String message,
                                 final String permission,
                                 final int permissionRequestCode) {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle(title)
                .setMessage(message)
                .setPositiveButton(android.R.string.ok, new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        requestPermission(permission, permissionRequestCode);
                    }
                });
        builder.create().show();
    }

    private void requestPermission(String permissionName, int permissionRequestCode) {
        ActivityCompat.requestPermissions(this,
                new String[]{permissionName}, permissionRequestCode);
    }


    public void get(View v) {
        ListView l1 = (ListView)findViewById(R.id.listView);
        TextView t1 = (TextView)findViewById(R.id.txtView1);
        Cursor cursor = getContentResolver().query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI,null,null,null,null);
        startManagingCursor(cursor);

        String[] from = {ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME, ContactsContract.CommonDataKinds.Phone.NUMBER, ContactsContract.CommonDataKinds.Phone._ID};

        int[] to = {android.R.id.text1, android.R.id.text2};

        SimpleCursorAdapter simpleCursorAdapter = new SimpleCursorAdapter(this, android.R.layout.simple_list_item_2, cursor, from, to);
        l1.setAdapter(simpleCursorAdapter);
        l1.setChoiceMode(ListView.CHOICE_MODE_MULTIPLE);
        int compt = l1.getAdapter().getCount();
        System.out.println(compt);
        t1.setText("Vous avez "+compt+" contacts");
    }

}
