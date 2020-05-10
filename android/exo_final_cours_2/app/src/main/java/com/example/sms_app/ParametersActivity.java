package com.example.sms_app;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class ParametersActivity extends AppCompatActivity {

    EditText text;
    Button save;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_parameters);

        text = (EditText)findViewById(R.id.editText3);
        save = (Button) findViewById(R.id.btn6);

        save.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                String input = text.getText().toString();
                Intent i = new Intent(ParametersActivity.this, SmsActivity.class);
                i.putExtra("key",input);
                startActivity(i);
            }
        });
    }



    public void HandleSmsActivity(View view) {
        Intent intent = new Intent(ParametersActivity.this,SmsActivity.class);
        startActivity(intent);
    }

    public void HandleParamActivity(View view) {
        Intent intent = new Intent(ParametersActivity.this,ParametersActivity.class);
        startActivity(intent);
    }
    public void HandleContactsActivity(View view) {
        Intent intent = new Intent(ParametersActivity.this,MainActivity.class);
        startActivity(intent);
    }
}
