package com.example.exo_final_cours1.ui.home;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.exo_final_cours1.R;
import com.example.exo_final_cours1.ui.Adapter;
import com.example.exo_final_cours1.ui.Memory;

public class HomeFragment extends Fragment {

    private HomeViewModel homeViewModel;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        homeViewModel =
                ViewModelProviders.of(this).get(HomeViewModel.class);
        View root = inflater.inflate(R.layout.fragment_home, container, false);

        RecyclerView taskListView = (RecyclerView) root.findViewById(R.id.taskListView);
        Adapter datas = new com.example.exo_final_cours1.ui.Adapter(Memory.getTasks());
        taskListView.setLayoutManager(new LinearLayoutManager(root.getContext()));
        taskListView.setAdapter(datas);

        System.out.println(datas.getItemCount());

        return root;
    }
}
