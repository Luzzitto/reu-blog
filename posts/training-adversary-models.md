---
title: "Training Adversary Models"
subtitle: "Extension of Clean-Image Backdoor"
date: "2023-10-28"
---

# Introduction
The task was to train multiple adversary models. 
The result allow would us to draw a conclusion of how the training data modification can affect the overall mAP score.
The sign of changes of mAP affect the next steps of the experiment.
If found that the alteration of data has a significant effect, then we continue with finding the ratio of attack labels to host labels.
Otherwise, we find alternative ways of affecting a model through the change in model structure.

We start off by creating a `base` model to set a standard for the adversary data.
The `base` model determines if there are noteable results.
We create the adversary models based on the t-SNE result.
There are two pairs that showed considerably a great overlap.
However, two pairs is not enough to prove the effectiveness of the experiment.
Thus, we handpicked another two pairs of categories along with an outlier pair.

# Hypothesis
The two pairs from t-SNE were `bridge and parking sign`, and `banner and traffic sign`. The two handpicked were `traffic light and car`, and `train and bus`. 
The first pair was pure random but `train and bus` were selected for their similarty in shape and perspective. 
The last one, however, is chosen for the purpose of reducing a highly represented category.

Categories such as cars or poles has a high instance. 
Their instance can goes up to tens of thousands.
We come up for an outlier that simply transfer some instances of a highly represented category to a lower represented category. 
We hypothesize that the lower occurence category will increase in mAP score since (a) the more examples, the better the model understand the object and (b) the reduction of highly instance category will remain relatively the same. 

# Experiment
The setup consists of conversion code of some labels to another. 
However, we are using Berkeley Deep Drive Dataset and converting them to YOLO format. 
In the process of conversion, we integrate the changes in the labels. 
A sample of the python code is illustrated below.

```python
if target and target is not None:
    if perm[target_counter]:
        id = category[host]
```

The naming convention for the pairs is formatted "*target*2*host*".
The target's instance count will be reduce based on the provided ratio, 0.5.

# Result
## bridge2parking_sign

| Name         |   Initial Count |   Final Count |
|--------------|-----------------|---------------|
| parking sign |              59 |           245 |
| bridge       |             373 |           187 |

| Class              | Images | Instances | Box(P  | R      | mAP50   | mAP50-95) | Mask(P | R      | mAP50   | mAP50-95) |
|--------------------|--------|-----------|--------|--------|---------|-----------|--------|--------|---------|-----------|
| all                | 1000   | 67549     | 0.362  | 0.239  | 0.225   | 0.145     | 0.339  | 0.212  | 0.193   | 0.106     |
| bridge             | 1000   | 212       | 0.625  | 0.222  | 0.261   | 0.149     | 0.499  | 0.164  | 0.166   | 0.0604    |
| parking sign       | 1000   | 57        | 0.0367 | 0.0877 | 0.0164  | 0.0135    | 0.0385 | 0.0877 | 0.0158  | 0.00904   |

## banner2traffic_sign

| Name         |   Initial Count |   Final Count |
|--------------|-----------------|---------------|
| traffic sign |            2957 |          3127 |
| banner       |             339 |           169 |

| Class              | Images | Instances | Box(P  | R      | mAP50   | mAP50-95) | Mask(P | R      | mAP50   | mAP50-95) |
|--------------------|--------|-----------|--------|--------|---------|-----------|--------|--------|---------|-----------|
| all                | 1000   | 67549     | 0.41   | 0.239  | 0.225   | 0.145     | 0.379  | 0.214  | 0.191   | 0.104     |
| banner             | 1000   | 729       | 0.409  | 0.0796 | 0.138   | 0.0902    | 0.411  | 0.0768 | 0.121   | 0.0546    |
| traffic sign       | 1000   | 3067      | 0.44   | 0.388  | 0.342   | 0.218     | 0.378  | 0.324  | 0.272   | 0.119     |

## traffic_light2car

| Name          |   Initial Count |   Final Count |
|---------------|-----------------|---------------|
| car           |            9990 |         11106 |
| traffic light |            2232 |          1116 |

| Class              | Images | Instances | Box(P  | R      | mAP50   | mAP50-95) | Mask(P | R      | mAP50   | mAP50-95) |
|--------------------|--------|-----------|--------|--------|---------|-----------|--------|--------|---------|-----------|
| all                | 1000   | 67549     | 0.407  | 0.243  | 0.224   | 0.146     | 0.389  | 0.215  | 0.192   | 0.105     |
| car                | 1000   | 10829     | 0.649  | 0.698  | 0.721   | 0.526     | 0.59   | 0.599  | 0.617   | 0.329     |
| traffic light      | 1000   | 2757      | 0.744  | 0.312  | 0.464   | 0.234     | 0.618  | 0.224  | 0.336   | 0.137     |

## train2bus

| Name   |   Initial Count |   Final Count |
|--------|-----------------|---------------|
| bus    |             232 |           236 |
| train  |               9 |             5 |

| Class              | Images | Instances | Box(P  | R      | mAP50   | mAP50-95) | Mask(P | R      | mAP50   | mAP50-95) |
|--------------------|--------|-----------|--------|--------|---------|-----------|--------|--------|---------|-----------|
| all                | 1000   | 67549     | 0.396  | 0.239  | 0.228   | 0.148     | 0.376  | 0.209  | 0.197   | 0.107     |
| bus                | 1000   | 219       | 0.557  | 0.342  | 0.367   | 0.289     | 0.534  | 0.32   | 0.342   | 0.208     |
| train              | 1000   | 7         | 1      | 0      | 0       | 0         | 1      | 0      | 0       | 0         |

## car2traffic_light

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
| bridge             | 1000   | 212       | 0.402  | 0.305  | 0.268   | 0.157     | 0.297  | 0.208  | 0.175   | 0.066     |
| bus                | 1000   | 219       | 0.525  | 0.347  | 0.365   | 0.284     | 0.523  | 0.333  | 0.342   | 0.18      |
| car                | 1000   | 10829     | 0.728  | 0.702  | 0.747   | 0.542     | 0.651  | 0.601  | 0.637   | 0.343     |
| parking sign       | 1000   | 57        | 0.179  | 0.0702 | 0.0476  | 0.0355    | 0.247  | 0.0702 | 0.0445  | 0.0251    |
| traffic light      | 1000   | 2757      | 0.6    | 0.448  | 0.454   | 0.226     | 0.499  | 0.347  | 0.341   | 0.132     |
| traffic sign       | 1000   | 3067      | 0.485  | 0.373  | 0.359   | 0.227     | 0.43   | 0.305  | 0.283   | 0.124     |
| train              | 1000   | 7         | 0      | 0      | 0       | 0         | 0      | 0      | 0       | 0         |

# Analysis
`parking sign` has a decrease while a relative increase in `bridge`. 
`banner2traffic_sign` shows little to no improvement. 
`traffic_light2car` illustrate a decline in mAP. 
`train2bus` does not show any development.
Lastly, we have the last pair, `car2traffic_light`.
The `car2traffic_light` did not show potential.

The outcome disproves our hypothesis despite initial finding in increase of mAP.
Completely switching two categories can only cause label mismatch.
The aim is to identify the succesfulness of the *Clean-Image Backdoor* attack.
This experiment ends in a unstatisfactory result.

# Discussion
Despite the changes, only a decrease in mAP score are illustrated.
Thus, we can only change the objective to further understand the attack worflow and its effect on the model.
Further investigation will be held to determine the effect of proposed changes.
 
