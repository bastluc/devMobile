package com.example.exo_final_cours1.ui;

import java.util.Date;

public class Task {
    private String name;
    private Date endDate;
    private boolean state;


    public Task(String text, Date endDate, boolean state){
        this.name = text;
        this.endDate = endDate;
        this.state = state;
    }

    public String toString(){
        return this.name;
    }

    public void setText(String text){
        this.name = text;
    }

    public String getText(){
        return this.name;
    }

    public Date getEndDate(){
        return this.endDate;
    }

    public void changeState(){
        if(this.state){
            this.state = false;
        }
        else {
            this.state = true;
        }
    }

    public boolean getState(){ return this.state; }
}
