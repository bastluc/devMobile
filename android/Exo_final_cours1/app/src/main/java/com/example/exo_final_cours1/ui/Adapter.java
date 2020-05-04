package com.example.exo_final_cours1.ui;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import com.example.exo_final_cours1.R;

import java.util.ArrayList;
import java.util.Date;

public class Adapter extends RecyclerView.Adapter<Adapter.MyViewHolder> {
    private ArrayList<Task> mDataset;

    // Provide a reference to the views for each data item
    // Complex data items may need more than one view per item, and
    // you provide access to all the views for a data item in a view holder
    public static class MyViewHolder extends RecyclerView.ViewHolder {
        // each data item is just a string in this case
        public View view;
        public TextView text;
        public TextView date;
        public CheckBox checkbox;
        public Button delete;
        public MyViewHolder(View v) {
            super(v);
            view = v;
            text = view.findViewById(R.id.taskName);
            date = view.findViewById(R.id.taskEndDate);
            checkbox = view.findViewById(R.id.checkTask);
            delete = view.findViewById(R.id.deleteTask);
        }
    }

    // Provide a suitable constructor (depends on the kind of dataset)
    public Adapter(ArrayList<Task> myDataset) {
        mDataset = myDataset;
    }

    // Create new views (invoked by the layout manager)
    @Override
    public Adapter.MyViewHolder onCreateViewHolder(ViewGroup parent,
                                                     int viewType) {
        // create a new view
        View item = LayoutInflater.from(parent.getContext()).inflate(R.layout.list_item, parent, false);

        MyViewHolder vh = new MyViewHolder(item);
        return vh;
    }

    // Replace the contents of a view (invoked by the layout manager)
    @Override
    public void onBindViewHolder(MyViewHolder holder, int position) {
        // - get element from your dataset at this position
        // - replace the contents of the view with that element
        holder.text.setText(mDataset.get(mDataset.size() - position -1).getText());
        holder.checkbox.setChecked(mDataset.get(mDataset.size() - position -1).getState());
        holder.date.setText(mDataset.get(mDataset.size() - position -1).getEndDate().);

        holder.checkbox.setOnClickListener(new CheckBoxListener(mDataset, position));
        holder.delete.setOnClickListener(new DeleteTaskListener(mDataset, position, this));
    }

    // Return the size of your dataset (invoked by the layout manager)
    @Override
    public int getItemCount() {
        return mDataset.size();
    }
}
