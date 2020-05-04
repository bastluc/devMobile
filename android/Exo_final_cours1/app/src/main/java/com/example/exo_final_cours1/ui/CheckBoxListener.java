package com.example.exo_final_cours1.ui;

import android.view.View;

import java.util.ArrayList;

public class CheckBoxListener implements View.OnClickListener {
    private int position;
    private ArrayList<Task> mDataset;

    public CheckBoxListener(ArrayList<Task> mDataset, int position){
        this.mDataset = mDataset;
        this.position = position;
    }

    @Override
    public void onClick(View v) {
        mDataset.get(mDataset.size() - position -1).changeState();
    }
}
