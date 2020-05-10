package com.example.sms_app;

import androidx.appcompat.app.AppCompatActivity;

import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.provider.Telephony;
import android.telephony.SmsManager;
import android.telephony.SmsMessage;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class SmsActivity extends AppCompatActivity {
    Button btnSendSMS;
    EditText txtPhoneNo;
    EditText txtMessage;
    TextView txtAuto;
    String value = "I call back later";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sms);


        txtAuto = (TextView)findViewById(R.id.textView);
        btnSendSMS = (Button) findViewById(R.id.btn5);
        txtPhoneNo = (EditText) findViewById(R.id.editText2);
        txtMessage = (EditText) findViewById(R.id.editText);


        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            value = extras.getString("key");
            txtAuto.setText("The auto message is: "+value);
        }

        btnSendSMS.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                String phoneNo = txtPhoneNo.getText().toString();
                String message = txtMessage.getText().toString();
                if (phoneNo.length()>0 && message.length()>0)

                        sendSMS(phoneNo, message);


                else
                    Toast.makeText(getBaseContext(),
                            "Please enter both phone number and message.",
                            Toast.LENGTH_SHORT).show();
            }
        });

        final String SMS_RECEIVED = "android.provider.Telephony.SMS_RECEIVED";
        IntentFilter filter = new IntentFilter(SMS_RECEIVED);
        registerReceiver(new ReceiverSMS(), filter);

    }

    private class ReceiverSMS extends BroadcastReceiver {
        // à chaque SMS reçu
        public void onReceive(Context context, Intent intent) {
            // Action à entreprendre
            Toast.makeText(SmsActivity.this,"You received a message", Toast.LENGTH_SHORT).show();

        }}

    private void sendSMS(String phoneNumber, String message) {
        for(int i=0; i<=10; i++ ) {
            PendingIntent pi = PendingIntent.getActivity(this, 0,
                    new Intent(this, SmsActivity.class), 0);
            SmsManager sms = SmsManager.getDefault();
            sms.sendTextMessage(phoneNumber, null, message, pi, null);
        }
    }



    public void HandleSmsActivity(View view) {
        Intent intent = new Intent(SmsActivity.this,SmsActivity.class);
        startActivity(intent);
    }

    public void HandleParamActivity(View view) {
        Intent intent = new Intent(SmsActivity.this,ParametersActivity.class);
        startActivity(intent);
    }
    public void HandleContactsActivity(View view) {
        Intent intent = new Intent(SmsActivity.this,MainActivity.class);
        startActivity(intent);
    }
}
