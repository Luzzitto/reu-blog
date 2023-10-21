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

# Instance Difference (Host/Target) with 0.5 ratio
**bridge2parking_sign**

| Name         |   Initial Count |   Final Count |
|--------------|-----------------|---------------|
| parking sign |             194 |           878 |
| bridge       |            1368 |           684 |

| Class              | Images | Instances | Box(P  | R      | mAP50   | mAP50-95) | Mask(P | R      | mAP50   | mAP50-95) |
|--------------------|--------|-----------|--------|--------|---------|-----------|--------|--------|---------|-----------|
| all                | 1000   | 67549     | 0.436  | 0.271  | 0.263   | 0.177     | 0.41   | 0.234  | 0.226   | 0.126     |
| banner             | 1000   | 729       | 0.312  | 0.197  | 0.141   | 0.0923    | 0.317  | 0.188  | 0.127   | 0.0563    |
| bicycle            | 1000   | 98        | 0.519  | 0.398  | 0.354   | 0.166     | 0.346  | 0.245  | 0.175   | 0.0631    |
| billboard          | 1000   | 144       | 0.123  | 0.215  | 0.106   | 0.0764    | 0.118  | 0.181  | 0.0865  | 0.0472    |
| bridge             | 1000   | 212       | 0.67   | 0.25   | 0.324   | 0.206     | 0.529  | 0.175  | 0.201   | 0.0912    |
| building           | 1000   | 6742      | 0.519  | 0.357  | 0.37    | 0.204     | 0.525  | 0.331  | 0.342   | 0.166     |
| bus                | 1000   | 219       | 0.542  | 0.4    | 0.43    | 0.348     | 0.539  | 0.37   | 0.41    | 0.246     |
| bus stop           | 1000   | 3         | 0      | 0      | 0       | 0         | 0      | 0      | 0       | 0         |
| car                | 1000   | 10829     | 0.757  | 0.714  | 0.769   | 0.569     | 0.682  | 0.616  | 0.661   | 0.37      |
| caravan            | 1000   | 52        | 0.188  | 0.135  | 0.131   | 0.114     | 0.209  | 0.135  | 0.129   | 0.0865    |
| dynamic            | 1000   | 1350      | 0.407  | 0.108  | 0.14    | 0.0797    | 0.37   | 0.0889 | 0.115   | 0.0514    |
| ego vehicle        | 1000   | 650       | 0.648  | 0.945  | 0.822   | 0.742     | 0.653  | 0.937  | 0.819   | 0.688     |
| fence              | 1000   | 453       | 0.316  | 0.305  | 0.214   | 0.108     | 0.227  | 0.192  | 0.0999  | 0.0411    |
| fire hydrant       | 1000   | 5         | 0.118  | 0.6    | 0.518   | 0.379     | 0.133  | 0.6    | 0.518   | 0.265     |
| garage             | 1000   | 21        | 0      | 0      | 0.00977 | 0.0072    | 0      | 0      | 0.00977 | 0.00758   |
| ground             | 1000   | 851       | 0.456  | 0.0947 | 0.136   | 0.0822    | 0.38   | 0.0729 | 0.0958  | 0.0422    |
| guard rail         | 1000   | 503       | 0.532  | 0.308  | 0.329   | 0.204     | 0.532  | 0.274  | 0.287   | 0.149     |
| lane divider       | 1000   | 49        | 0.163  | 0.102  | 0.0413  | 0.0186    | 0.0722 | 0.0408 | 0.024   | 0.00566   |
| mail box           | 1000   | 6         | 1      | 0      | 0       | 0         | 1      | 0      | 0       | 0         |
| motorcycle         | 1000   | 47        | 0.552  | 0.447  | 0.472   | 0.355     | 0.592  | 0.426  | 0.459   | 0.263     |
| parking            | 1000   | 197       | 0.21   | 0.0508 | 0.0545  | 0.0308    | 0.211  | 0.0406 | 0.0304  | 0.0142    |
| parking sign       | 1000   | 57        | 0.0387 | 0.0877 | 0.0159  | 0.0126    | 0.0448 | 0.0877 | 0.0152  | 0.00845   |
| person             | 1000   | 1177      | 0.724  | 0.577  | 0.649   | 0.4       | 0.682  | 0.506  | 0.569   | 0.275     |
| pole               | 1000   | 10720     | 0.498  | 0.251  | 0.265   | 0.141     | 0.477  | 0.217  | 0.236   | 0.0917    |
| polegroup          | 1000   | 237       | 0      | 0      | 0.0132  | 0.00694   | 0      | 0      | 0.00721 | 0.00343   |
| rail track         | 1000   | 4         | 0      | 0      | 0       | 0         | 0      | 0      | 0       | 0         |
| rider              | 1000   | 45        | 0.519  | 0.378  | 0.417   | 0.24      | 0.422  | 0.289  | 0.288   | 0.0831    |
| road               | 1000   | 1850      | 0.809  | 0.592  | 0.664   | 0.53      | 0.835  | 0.59   | 0.666   | 0.543     |
| sidewalk           | 1000   | 2035      | 0.604  | 0.401  | 0.426   | 0.258     | 0.625  | 0.38   | 0.402   | 0.202     |
| sky                | 1000   | 2546      | 0.542  | 0.54   | 0.522   | 0.391     | 0.561  | 0.523  | 0.51    | 0.356     |
| static             | 1000   | 8063      | 0.34   | 0.0744 | 0.1     | 0.0519    | 0.318  | 0.0595 | 0.0811  | 0.0358    |
| street light       | 1000   | 2157      | 0.453  | 0.182  | 0.172   | 0.0773    | 0.318  | 0.117  | 0.109   | 0.0466    |
| terrain            | 1000   | 1075      | 0.463  | 0.223  | 0.251   | 0.138     | 0.442  | 0.19   | 0.213   | 0.0937    |
| traffic cone       | 1000   | 146       | 0.426  | 0.219  | 0.181   | 0.101     | 0.396  | 0.199  | 0.162   | 0.0785    |
| traffic device     | 1000   | 70        | 0.0886 | 0.0143 | 0.00788 | 0.00486   | 0.11   | 0.0143 | 0.0083  | 0.00113   |
| traffic light      | 1000   | 2757      | 0.653  | 0.433  | 0.487   | 0.253     | 0.543  | 0.342  | 0.363   | 0.145     |
| traffic sign       | 1000   | 3067      | 0.536  | 0.411  | 0.42    | 0.274     | 0.467  | 0.334  | 0.337   | 0.149     |
| traffic sign frame | 1000   | 480       | 0.525  | 0.329  | 0.338   | 0.214     | 0.445  | 0.256  | 0.247   | 0.11      |
| trailer            | 1000   | 8         | 0.216  | 0.125  | 0.0548  | 0.0414    | 0.231  | 0.125  | 0.0548  | 0.0343    |
| train              | 1000   | 7         | 1      | 0      | 0.00445 | 0.00356   | 1      | 0      | 0.00445 | 0.004     |
| trash can          | 1000   | 8         | 0.157  | 0.375  | 0.133   | 0.0508    | 0.0652 | 0.125  | 0.0425  | 0.0258    |
| truck              | 1000   | 520       | 0.52   | 0.462  | 0.44    | 0.356     | 0.512  | 0.431  | 0.398   | 0.226     |
| tunnel             | 1000   | 7         | 0.632  | 0.286  | 0.29    | 0.268     | 0.657  | 0.286  | 0.29    | 0.189     |
| unlabeled          | 1000   | 9         | 1      | 0      | 0       | 0         | 1      | 0      | 0       | 0         |
| vegetation         | 1000   | 7058      | 0.603  | 0.479  | 0.512   | 0.303     | 0.598  | 0.44   | 0.459   | 0.233     |
| wall               | 1000   | 286       | 0.247  | 0.137  | 0.115   | 0.0656    | 0.253  | 0.129  | 0.112   | 0.0622    |

**banner2traffic_sign**

| Name         |   Initial Count |   Final Count |
|--------------|-----------------|---------------|
| traffic sign |           10685 |         11328 |
| banner       |            1286 |           643 |



**traffic_light2car**

| Name          |   Initial Count |   Final Count |
|---------------|-----------------|---------------|
| car           |           35941 |         39749 |
| traffic light |            7617 |          3809 |

**train2bus**

| Name   |   Initial Count |   Final Count |
|--------|-----------------|---------------|
| bus    |             800 |           817 |
| train  |              34 |            17 |


## Base Model 
| Class              | Images | Instances | Box(P  | R      | mAP50   | mAP50-95) | Mask(P | R      | mAP50   | mAP50-95) |
|--------------------|--------|-----------|--------|--------|---------|-----------|--------|--------|---------|-----------|
| all                | 1000   | 67549     | 0.395  | 0.276  | 0.26    | 0.173     | 0.391  | 0.24   | 0.223   | 0.123     |
| banner             | 1000   | 729       | 0.305  | 0.21   | 0.151   | 0.0979    | 0.289  | 0.185  | 0.134   | 0.0622    |
| bicycle            | 1000   | 98        | 0.527  | 0.347  | 0.336   | 0.161     | 0.434  | 0.258  | 0.24    | 0.0857    |
| billboard          | 1000   | 144       | 0.115  | 0.229  | 0.0643  | 0.0431    | 0.112  | 0.201  | 0.0554  | 0.0258    |
| bridge             | 1000   | 212       | 0.413  | 0.387  | 0.353   | 0.213     | 0.315  | 0.259  | 0.217   | 0.0905    |
| building           | 1000   | 6742      | 0.478  | 0.321  | 0.337   | 0.185     | 0.48   | 0.292  | 0.312   | 0.149     |
| bus                | 1000   | 219       | 0.602  | 0.429  | 0.451   | 0.365     | 0.576  | 0.388  | 0.389   | 0.23      |
| bus stop           | 1000   | 3         | 0      | 0      | 0       | 0         | 0      | 0      | 0       | 0         |
| car                | 1000   | 10829     | 0.757  | 0.713  | 0.766   | 0.564     | 0.678  | 0.608  | 0.652   | 0.355     |
| caravan            | 1000   | 52        | 0.331  | 0.192  | 0.172   | 0.15      | 0.353  | 0.179  | 0.168   | 0.115     |
| dynamic            | 1000   | 1350      | 0.468  | 0.114  | 0.151   | 0.0827    | 0.438  | 0.097  | 0.117   | 0.0539    |
| ego vehicle        | 1000   | 650       | 0.65   | 0.952  | 0.827   | 0.743     | 0.657  | 0.944  | 0.824   | 0.682     |
| fence              | 1000   | 453       | 0.322  | 0.307  | 0.204   | 0.0951    | 0.2    | 0.172  | 0.087   | 0.0344    |
| fire hydrant       | 1000   | 5         | 0.0635 | 0.4    | 0.156   | 0.101     | 0.0686 | 0.4    | 0.156   | 0.0809    |
| garage             | 1000   | 21        | 0      | 0      | 0.00892 | 0.00781   | 0      | 0      | 0.00892 | 0.00671   |
| ground             | 1000   | 851       | 0.442  | 0.11   | 0.136   | 0.0786    | 0.416  | 0.0917 | 0.0954  | 0.043     |
| guard rail         | 1000   | 503       | 0.528  | 0.348  | 0.368   | 0.228     | 0.496  | 0.308  | 0.312   | 0.162     |
| lane divider       | 1000   | 49        | 0.0794 | 0.0816 | 0.0234  | 0.0135    | 0.071  | 0.0612 | 0.0168  | 0.00663   |
| mail box           | 1000   | 6         | 0      | 0      | 0       | 0         | 0      | 0      | 0       | 0         |
| motorcycle         | 1000   | 47        | 0.61   | 0.468  | 0.49    | 0.338     | 0.601  | 0.449  | 0.484   | 0.272     |
| parking            | 1000   | 197       | 0.252  | 0.0914 | 0.0853  | 0.041     | 0.137  | 0.0406 | 0.0273  | 0.0134    |
| parking sign       | 1000   | 57        | 0.173  | 0.211  | 0.115   | 0.0909    | 0.223  | 0.226  | 0.125   | 0.0654    |
| person             | 1000   | 1177      | 0.736  | 0.572  | 0.646   | 0.407     | 0.703  | 0.509  | 0.577   | 0.282     |
| pole               | 1000   | 10720     | 0.463  | 0.257  | 0.257   | 0.135     | 0.455  | 0.226  | 0.231   | 0.0893    |
| polegroup          | 1000   | 237       | 0      | 0      | 0.00687 | 0.00381   | 0      | 0      | 0.00687 | 0.00339   |
| rail track         | 1000   | 4         | 0      | 0      | 0       | 0         | 1      | 0      | 0       | 0         |
| rider              | 1000   | 45        | 0.635  | 0.4    | 0.461   | 0.269     | 0.513  | 0.311  | 0.3     | 0.085     |
| road               | 1000   | 1850      | 0.803  | 0.583  | 0.662   | 0.528     | 0.823  | 0.576  | 0.659   | 0.542     |
| sidewalk           | 1000   | 2035      | 0.541  | 0.407  | 0.413   | 0.244     | 0.562  | 0.386  | 0.385   | 0.187     |
| sky                | 1000   | 2546      | 0.627  | 0.507  | 0.552   | 0.405     | 0.646  | 0.488  | 0.539   | 0.378     |
| static             | 1000   | 8063      | 0.328  | 0.0825 | 0.102   | 0.0539    | 0.308  | 0.0681 | 0.0836  | 0.0371    |
| street light       | 1000   | 2157      | 0.426  | 0.187  | 0.172   | 0.0739    | 0.281  | 0.11   | 0.105   | 0.042     |
| terrain            | 1000   | 1075      | 0.433  | 0.257  | 0.26    | 0.139     | 0.424  | 0.222  | 0.224   | 0.0956    |
| traffic cone       | 1000   | 146       | 0.292  | 0.233  | 0.21    | 0.115     | 0.293  | 0.219  | 0.202   | 0.109     |
| traffic device     | 1000   | 70        | 0.23   | 0.0286 | 0.019   | 0.0104    | 0.146  | 0.0143 | 0.00705 | 0.00278   |
| traffic light      | 1000   | 2757      | 0.601  | 0.478  | 0.493   | 0.254     | 0.497  | 0.375  | 0.353   | 0.14      |
| traffic sign       | 1000   | 3067      | 0.492  | 0.441  | 0.415   | 0.267     | 0.427  | 0.356  | 0.327   | 0.147     |
| traffic sign frame | 1000   | 480       | 0.392  | 0.358  | 0.303   | 0.191     | 0.328  | 0.271  | 0.21    | 0.0944    |
| trailer            | 1000   | 8         | 0      | 0      | 0.00556 | 0.00445   | 0      | 0      | 0.00556 | 0.00556   |
| train              | 1000   | 7         | 1      | 0      | 0.0111  | 0.00887   | 1      | 0      | 0.0111  | 0.00998   |
| trash can          | 1000   | 8         | 0.0784 | 0.25   | 0.108   | 0.0494    | 0.0491 | 0.125  | 0.0783  | 0.0307    |
| truck              | 1000   | 520       | 0.557  | 0.496  | 0.487   | 0.391     | 0.542  | 0.456  | 0.446   | 0.253     |
| tunnel             | 1000   | 7         | 0.187  | 0.286  | 0.288   | 0.26      | 0.203  | 0.286  | 0.288   | 0.188     |
| unlabeled          | 1000   | 9         | 1      | 0      | 0       | 0         | 1      | 0      | 0       | 0         |
| vegetation         | 1000   | 7058      | 0.563  | 0.496  | 0.507   | 0.295     | 0.557  | 0.457  | 0.457   | 0.222     |
| wall               | 1000   | 286       | 0.292  | 0.182  | 0.136   | 0.079     | 0.308  | 0.171  | 0.131   | 0.0677    |