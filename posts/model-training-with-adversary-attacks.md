---
title: "Model Training with Adversary Attack"
subtitle: "Extension of Clean-Image Backdoor"
date: "2023-10-07"
---

# Introduction
The previous project created the foundation for the main task.
However, the milestone is far from the end goal.
There are aspects that needs to be covered, along with data that needs to be inspected.
The collected information from the previous project act as a pioneer for the current project.
The goal, at this time, is to illustrate any significant effects when variables are introduced.

We use the adversary attack, *Clean-Image Backdoor*, to introduce the variables affected by the changes.
There are many tasks to see the effect of proposed changes.
Thus, we start by creating the base model followed by models with adversary attack.

# First Task
The first task is to create a base model.
The base model determine the controls for any manipulation done to its legacy.
Several factors contributes to the development of models.
Thus, we can conclude that the changes highlights the effect of said adjustments.

The first model trained took roughly 6 days to complete.
The first model contains 7000 training images with 100 epochs.
The project timeline is strict and restricted to the end of the year.
Thus, we scaled down the training to give immediate result.
The immediate results are frowned upon, however, the results can signify the effect of changes to the model accuracy.
If there are any notable conclusion, we can continue with the experiment.
Otherwise, the project will be modified to highlight the contributing factors to adversary attacks.

# Base Model
As previously stated, we scaled down the training methods (See the table below for the changes made).
The new procedure greatly reduce the hours required to train a model.
The side effect is the mAP score attained from training the model despite fewer images.
The upside is the result can be inferred immediately.

|     | Epochs | Images | Image Size | Time      |
|-----|--------|--------|------------|-----------|
| Old | 100    | 7000   | 1280       | ~6 days   |
| New | 50     | 3500   | 720        | 7.5 hours |

# The Experiment
The result from t-Distributed Stocastic Neighbor Embedding (t-SNE) will be utilized to create an adversary attack based from *Clean-Image Backdoor*. 2 pairs of categories will come from t-SNE while 2 pairs from visual inference. The table below will illustrate the results from training.

The dataset for each training is not consistent. They may or may not lack the necessary 

| Model | Box/mAP50 | Box/mAP50-95 | Mask/mAP50 | Mask/mAP50-95 |
|-------|-----------|--------------|------------|---------------|
| Base  |           |              |            |               |
|       |           |              |            |               |
|       |           |              |            |               |
|       |           |              |            |               |
|       |           |              |            |               |