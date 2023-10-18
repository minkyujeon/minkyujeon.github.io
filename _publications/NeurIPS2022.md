---
title: "Sagemix: Saliency-guided mixup for point clouds"
collection: publications
permalink: /publication/NeurIPS2022
excerpt: 'Sanghyeok Lee\*, Minkyu Jeon\*, Injae Kim, Yunyang Xiong, Hyunwoo J Kim'
date: 2022-12-06
venue: 'NeurIPS'
paperurl: 'https://proceedings.neurips.cc/paper_files/paper/2022/file/9543942c237ded1b39b1fd37259ff88e-Paper-Conference.pdf'
citation: #'Your Name, You. (2010). &quot;Paper Title Number 2.&quot; <i>Journal 1</i>. 1(2).'
---
Sanghyeok Lee\*, Minkyu Jeon\*, Injae Kim, Yunyang Xiong, Hyunwoo J Kim

Data augmentation is key to improving the generalization ability of deep learning
models. Mixup is a simple and widely-used data augmentation technique that has
proven effective in alleviating the problems of overfitting and data scarcity. Also,
recent studies of saliency-aware Mixup in the image domain show that preserving
discriminative parts is beneficial to improving the generalization performance.
However, these Mixup-based data augmentations are underexplored in 3D vision,
especially in point clouds. In this paper, we propose SageMix, a saliency-guided
Mixup for point clouds to preserve salient local structures. Specifically, we extract salient regions from two point clouds and smoothly combine them into one
continuous shape. With a simple sequential sampling by re-weighted saliency
scores, SageMix preserves the local structure of salient regions. Extensive experiments demonstrate that the proposed method consistently outperforms existing
Mixup methods in various benchmark point cloud datasets. With PointNet++, our
method achieves an accuracy gain of 2.6% and 4.0% over standard training in 3D
Warehouse dataset (MN40) and ScanObjectNN, respectively. In addition to generalization performance, SageMix improves robustness and uncertainty calibration.
Moreover, when adopting our method to various tasks including part segmentation and standard 2D image classification, our method achieves competitive
performance. Code is available at https://github.com/mlvlab/SageMix.
<!-- [Download paper here](https://proceedings.neurips.cc/paper_files/paper/2022/file/9543942c237ded1b39b1fd37259ff88e-Paper-Conference.pdf) -->

<!-- Recommended citation: Your Name, You. (2010). "Paper Title Number 2." <i>Journal 1</i>. 1(2). -->