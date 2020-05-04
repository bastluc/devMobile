package com.example.exo_final_cours1.ui;
import java.util.ArrayList;

public class Memory {

    private static Memory instance = new Memory();
    private static ArrayList<Task> tasks = new ArrayList<Task>();

    private Memory(){

    }

    public static Memory getInstance(){
        return instance;
    }

    public static void addTask(Task t){
        tasks.add(t);
    }

    public static ArrayList<Task> getTasks(){
        return tasks;
    }
}
