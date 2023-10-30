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

|     | Epochs | Images | Image Size | Time      | Average mAP |
|-----|--------|--------|------------|-----------|-------------|
| Old | 100    | 7000   | 1280       | ~6 days   | 0.32        |
| New | 50     | 1000   | 720        | 2.5 hours |             |

The result of these changes reflect on their mAP score. 

# The Experiment
The result from t-Distributed Stocastic Neighbor Embedding (t-SNE) will be utilized to create an adversary attack based from *Clean-Image Backdoor*. 2 pairs of categories will come from t-SNE while 2 pairs from visual inference. The table below will illustrate the results from training.

The dataset for each training is not consistent. They may or may not lack the necessary 

# Instance Difference (Host/Target) with 0.5 ratio
**bridge2parking_sign**

| Name         |   Initial Count |   Final Count |
|--------------|-----------------|---------------|
| parking sign |              59 |           245 |
| bridge       |             373 |           187 |

| Class              | Images | Instances | Box(P  | R      | mAP50   | mAP50-95) | Mask(P | R      | mAP50   | mAP50-95) |
|--------------------|--------|-----------|--------|--------|---------|-----------|--------|--------|---------|-----------|
| all                | 1000   | 67549     | 0.362  | 0.239  | 0.225   | 0.145     | 0.339  | 0.212  | 0.193   | 0.106     |
| bridge             | 1000   | 212       | 0.625  | 0.222  | 0.261   | 0.149     | 0.499  | 0.164  | 0.166   | 0.0604    |
| parking sign       | 1000   | 57        | 0.0367 | 0.0877 | 0.0164  | 0.0135    | 0.0385 | 0.0877 | 0.0158  | 0.00904   |

**banner2traffic_sign**

| Name         |   Initial Count |   Final Count |
|--------------|-----------------|---------------|
| traffic sign |            2957 |          3127 |
| banner       |             339 |           169 |

| Class              | Images | Instances | Box(P  | R      | mAP50   | mAP50-95) | Mask(P | R      | mAP50   | mAP50-95) |
|--------------------|--------|-----------|--------|--------|---------|-----------|--------|--------|---------|-----------|
| all                | 1000   | 67549     | 0.41   | 0.239  | 0.225   | 0.145     | 0.379  | 0.214  | 0.191   | 0.104     |
| banner             | 1000   | 729       | 0.409  | 0.0796 | 0.138   | 0.0902    | 0.411  | 0.0768 | 0.121   | 0.0546    |
| traffic sign       | 1000   | 3067      | 0.44   | 0.388  | 0.342   | 0.218     | 0.378  | 0.324  | 0.272   | 0.119     |

**traffic_light2car**

| Name          |   Initial Count |   Final Count |
|---------------|-----------------|---------------|
| car           |            9990 |         11106 |
| traffic light |            2232 |          1116 |

| Class              | Images | Instances | Box(P  | R      | mAP50   | mAP50-95) | Mask(P | R      | mAP50   | mAP50-95) |
|--------------------|--------|-----------|--------|--------|---------|-----------|--------|--------|---------|-----------|
| all                | 1000   | 67549     | 0.407  | 0.243  | 0.224   | 0.146     | 0.389  | 0.215  | 0.192   | 0.105     |
| car                | 1000   | 10829     | 0.649  | 0.698  | 0.721   | 0.526     | 0.59   | 0.599  | 0.617   | 0.329     |
| traffic light      | 1000   | 2757      | 0.744  | 0.312  | 0.464   | 0.234     | 0.618  | 0.224  | 0.336   | 0.137     |

**train2bus**

| Name   |   Initial Count |   Final Count |
|--------|-----------------|---------------|
| bus    |             232 |           236 |
| train  |               9 |             5 |

| Class              | Images | Instances | Box(P  | R      | mAP50   | mAP50-95) | Mask(P | R      | mAP50   | mAP50-95) |
|--------------------|--------|-----------|--------|--------|---------|-----------|--------|--------|---------|-----------|
| all                | 1000   | 67549     | 0.396  | 0.239  | 0.228   | 0.148     | 0.376  | 0.209  | 0.197   | 0.107     |
| bus                | 1000   | 219       | 0.557  | 0.342  | 0.367   | 0.289     | 0.534  | 0.32   | 0.342   | 0.208     |
| train              | 1000   | 7         | 1      | 0      | 0       | 0         | 1      | 0      | 0       | 0         |

**car2traffic_light**

| Name          |   Initial Count |   Final Count |
|---------------|-----------------|---------------|
| traffic light |            2232 |          7227 |
| car           |            9990 |          4995 |

| Class              | Images | Instances | Box(P  | R      | mAP50   | mAP50-95) | Mask(P | R      | mAP50   | mAP50-95) |
|--------------------|--------|-----------|--------|--------|---------|-----------|--------|--------|---------|-----------|
| all                | 1000   | 67549     | 0.395  | 0.244  | 0.224   | 0.147     | 0.397  | 0.214  | 0.193   | 0.105     |
| car                | 1000   | 10829     | 0.889  | 0.594  | 0.747   | 0.537     | 0.818  | 0.516  | 0.636   | 0.338     |
| traffic light      | 1000   | 2757      | 0.127  | 0.46   | 0.287   | 0.151     | 0.102  | 0.352  | 0.195   | 0.0759    |

## Base Model 
| Class              | Images | Instances | Box(P  | R      | mAP50   | mAP50-95) | Mask(P | R      | mAP50   | mAP50-95) |
|--------------------|--------|-----------|--------|--------|---------|-----------|--------|--------|---------|-----------|
| all                | 1000   | 67549     | 0.363  | 0.244  | 0.226   | 0.147     | 0.364  | 0.214  | 0.194   | 0.106     |
| banner             | 1000   | 729       | 0.335  | 0.141  | 0.129   | 0.0806    | 0.338  | 0.129  | 0.115   | 0.0524    |
| bicycle            | 1000   | 98        | 0.472  | 0.418  | 0.404   | 0.158     | 0.366  | 0.301  | 0.249   | 0.087     |
| billboard          | 1000   | 144       | 0.0674 | 0.215  | 0.0423  | 0.0255    | 0.0496 | 0.139  | 0.0286  | 0.0147    |
| bridge             | 1000   | 212       | 0.402  | 0.305  | 0.268   | 0.157     | 0.297  | 0.208  | 0.175   | 0.066     |
| building           | 1000   | 6742      | 0.508  | 0.295  | 0.315   | 0.166     | 0.518  | 0.276  | 0.287   | 0.134     |
| bus                | 1000   | 219       | 0.525  | 0.347  | 0.365   | 0.284     | 0.523  | 0.333  | 0.342   | 0.18      |
| bus stop           | 1000   | 3         | 0      | 0      | 0       | 0         | 0      | 0      | 0       | 0         |
| car                | 1000   | 10829     | 0.728  | 0.702  | 0.747   | 0.542     | 0.651  | 0.601  | 0.637   | 0.343     |
| caravan            | 1000   | 52        | 0.185  | 0.269  | 0.105   | 0.0813    | 0.178  | 0.212  | 0.088   | 0.0593    |
| dynamic            | 1000   | 1350      | 0.362  | 0.109  | 0.12    | 0.0684    | 0.329  | 0.0888 | 0.0928  | 0.0412    |
| ego vehicle        | 1000   | 650       | 0.642  | 0.903  | 0.769   | 0.678     | 0.653  | 0.894  | 0.764   | 0.623     |
| fence              | 1000   | 453       | 0.269  | 0.258  | 0.161   | 0.0729    | 0.168  | 0.146  | 0.0698  | 0.0273    |
| fire hydrant       | 1000   | 5         | 0.069  | 0.4    | 0.0494  | 0.0281    | 0.0781 | 0.4    | 0.0494  | 0.0278    |
| garage             | 1000   | 21        | 0      | 0      | 0.00411 | 0.00329   | 0      | 0      | 0.00411 | 0.00303   |
| ground             | 1000   | 851       | 0.439  | 0.0433 | 0.0956  | 0.0545    | 0.361  | 0.0306 | 0.0675  | 0.0314    |
| guard rail         | 1000   | 503       | 0.493  | 0.276  | 0.287   | 0.165     | 0.48   | 0.244  | 0.242   | 0.117     |
| lane divider       | 1000   | 49        | 0.0345 | 0.0408 | 0.0195  | 0.00853   | 0.0386 | 0.0408 | 0.0123  | 0.00205   |
| mail box           | 1000   | 6         | 1      | 0      | 0.0129  | 0.0129    | 1      | 0      | 0.0129  | 0.00643   |
| motorcycle         | 1000   | 47        | 0.604  | 0.383  | 0.448   | 0.302     | 0.646  | 0.383  | 0.439   | 0.25      |
| parking            | 1000   | 197       | 0.159  | 0.065  | 0.0381  | 0.0189    | 0.0795 | 0.0254 | 0.0188  | 0.00883   |
| parking sign       | 1000   | 57        | 0.179  | 0.0702 | 0.0476  | 0.0355    | 0.247  | 0.0702 | 0.0445  | 0.0251    |
| person             | 1000   | 1177      | 0.686  | 0.545  | 0.608   | 0.381     | 0.649  | 0.493  | 0.547   | 0.251     |
| pole               | 1000   | 10720     | 0.415  | 0.226  | 0.195   | 0.0949    | 0.421  | 0.205  | 0.193   | 0.0699    |
| polegroup          | 1000   | 237       | 0      | 0      | 0.0398  | 0.0218    | 0      | 0      | 0.0195  | 0.00589   |
| rail track         | 1000   | 4         | 0      | 0      | 0       | 0         | 1      | 0      | 0       | 0         |
| rider              | 1000   | 45        | 0.466  | 0.244  | 0.313   | 0.197     | 0.347  | 0.178  | 0.165   | 0.0453    |
| road               | 1000   | 1850      | 0.825  | 0.549  | 0.632   | 0.493     | 0.848  | 0.547  | 0.625   | 0.502     |
| sidewalk           | 1000   | 2035      | 0.488  | 0.369  | 0.358   | 0.203     | 0.5    | 0.348  | 0.334   | 0.157     |
| sky                | 1000   | 2546      | 0.592  | 0.494  | 0.503   | 0.364     | 0.618  | 0.478  | 0.49    | 0.344     |
| static             | 1000   | 8063      | 0.309  | 0.0635 | 0.0823  | 0.0413    | 0.284  | 0.0507 | 0.065   | 0.0276    |
| street light       | 1000   | 2157      | 0.41   | 0.152  | 0.142   | 0.0607    | 0.288  | 0.095  | 0.0879  | 0.0344    |
| terrain            | 1000   | 1075      | 0.372  | 0.215  | 0.202   | 0.104     | 0.34   | 0.178  | 0.16    | 0.068     |
| traffic cone       | 1000   | 146       | 0.345  | 0.187  | 0.157   | 0.081     | 0.308  | 0.158  | 0.136   | 0.0677    |
| traffic device     | 1000   | 70        | 0.0684 | 0.0143 | 0.00793 | 0.00449   | 0.0719 | 0.0143 | 0.00701 | 0.00389   |
| traffic light      | 1000   | 2757      | 0.6    | 0.448  | 0.454   | 0.226     | 0.499  | 0.347  | 0.341   | 0.132     |
| traffic sign       | 1000   | 3067      | 0.485  | 0.373  | 0.359   | 0.227     | 0.43   | 0.305  | 0.283   | 0.124     |
| traffic sign frame | 1000   | 480       | 0.391  | 0.302  | 0.256   | 0.158     | 0.313  | 0.221  | 0.176   | 0.0813    |
| trailer            | 1000   | 8         | 0      | 0      | 0.00566 | 0.0034    | 0      | 0      | 0.00566 | 0.00453   |
| train              | 1000   | 7         | 0      | 0      | 0       | 0         | 0      | 0      | 0       | 0         |
| trash can          | 1000   | 8         | 0.135  | 0.25   | 0.202   | 0.133     | 0.163  | 0.25   | 0.202   | 0.115     |
| truck              | 1000   | 520       | 0.417  | 0.437  | 0.385   | 0.296     | 0.414  | 0.404  | 0.349   | 0.191     |
| tunnel             | 1000   | 7         | 0.15   | 0.286  | 0.29    | 0.259     | 0.165  | 0.286  | 0.29    | 0.188     |
| unlabeled          | 1000   | 9         | 1      | 0      | 0       | 0         | 1      | 0      | 0       | 0         |
| vegetation         | 1000   | 7058      | 0.53   | 0.481  | 0.472   | 0.262     | 0.515  | 0.435  | 0.419   | 0.198     |
| wall               | 1000   | 286       | 0.198  | 0.103  | 0.0791  | 0.0494    | 0.227  | 0.103  | 0.0779  | 0.0453    |