package com.example.exo_final_cours1.ui;

import android.view.View;

import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class DeleteTaskListener  implements View.OnClickListener {

    private int position;
    private ArrayList<Task> mDataset;
    private  RecyclerView.Adapter<Adapter.MyViewHolder> adapter;

    public DeleteTaskListener(ArrayList<Task> mDataset, int position, RecyclerView.Adapter<Adapter.MyViewHolder> adapter){
        this.mDataset = mDataset;
        this.position = position;
        this.adapter = adapter;
    }

    @Override
    public void onClick(View v) {
        mDataset.remove(mDataset.size() - position -1);
        adapter.notifyDataSetChanged();
    }
}
