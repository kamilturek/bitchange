#!/usr/bin/env python3

import logging
from pathlib import Path

import boto3

"""
Initialization script for BitChange project
- Downloads needed dev env files
"""

logging.basicConfig(level=logging.INFO)


ROOT_DIR = Path(__file__).resolve().parent.parent
S3_BITCHANGE_ENV = 'bitchange-env-bucket'


if __name__ == '__main__':
    s3 = boto3.client('s3')
    logging.info('Downloading .env.dev file.')
    s3.download_file(S3_BITCHANGE_ENV, '.env.dev', str(ROOT_DIR / '.env.dev'))
    logging.info('Downloaded .env.local file successfuly.')
