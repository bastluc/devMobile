package com.example.exo_final_cours1.ui.dashboard;

import android.icu.text.SimpleDateFormat;
import android.os.Build;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;

import com.example.exo_final_cours1.R;
import com.example.exo_final_cours1.ui.Memory;
import com.example.exo_final_cours1.ui.Task;

import java.time.Instant;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;

public class DashboardFragment extends Fragment {

    private DashboardViewModel dashboardViewModel;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        dashboardViewModel =
                ViewModelProviders.of(this).get(DashboardViewModel.class);
        final View root = inflater.inflate(R.layout.fragment_dashboard, container, false);

        DatePicker endDateTask = root.findViewById(R.id.endTaskDate);
        endDateTask.setMinDate(System.currentTimeMillis());

        Button addTaskButton = (Button) root.findViewById(R.id.addTaskButton);
        addTaskButton.setOnClickListener(new View.OnClickListener() {
            @RequiresApi(api = Build.VERSION_CODES.O)
            @Override
            public void onClick(View v) {
                EditText addTaskText = (EditText) root.findViewById(R.id.addTaskText);

                DatePicker endDateTask = root.findViewById(R.id.endTaskDate);
                long dateTime = endDateTask.getCalendarView().getDate();
                Date taskEndDate = new Date(dateTime);

                Task task = new Task(addTaskText.getText().toString(), taskEndDate, false);
                Memory.addTask(task);
            }
        });

        return root;
    }
}
